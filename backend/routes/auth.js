require('dotenv').config();
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const verifyToken = require('../middleware');

const jwtSecret = process.env.JWT_SECRET || 'secretkey';

// Transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    const token = jwt.sign({ _id: user._id, role: user.role, isVerified: user.isVerified }, jwtSecret);
    res.send({ user, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send(error);
  }
});

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ active: true });
    const inactiveUsers = totalUsers - activeUsers;

    res.json({ totalUsers, activeUsers, inactiveUsers });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Register endpoint
router.post('/register', async (req, res) => {
  const { firstName, lastName, birthDate, gender, country, email, password } = req.body;

  if (!firstName || !lastName || !birthDate || !gender || !country || !email || !password) {
    return res.status(400).send({ message: 'Please fill in all fields' });
  }

  const verificationCode = Math.floor(10000 + Math.random() * 90000).toString();

  const newUser = new User({
    firstName,
    lastName,
    birthDate,
    gender,
    country,
    email,
    password,
    verificationCode
  });

  try {
    await newUser.save();

    const mailOptions = {
      from: 'intsenai@gmail.com',
      to: email,
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        return res.status(500).send({ message: 'Error sending email' });
      }
      res.status(200).send({ message: 'User registered. Please check your email for verification code.' });
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ message: 'Error registering user' });
  }
});

// Verify email endpoint
router.post('/verify-email', async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email, verificationCode });

    if (!user) {
      return res.status(400).send({ message: 'Invalid verification code' });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();

    res.status(200).send({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).send({ message: 'Error verifying email' });
  }
});

// Get all users
router.get('/users', verifyToken, async (req, res) => {
  try {
    const users = await User.find({}, 'firstName lastName birthDate gender country email password isVerified verificationCode role'); // Specify fields you want to return
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get current user info
router.get('/user', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});



module.exports = router;
