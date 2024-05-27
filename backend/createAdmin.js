require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/stack-ai', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log('Connected to MongoDB');

  const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8);

  const adminUser = new User({
    username: process.env.ADMIN_USERNAME,
    password: hashedPassword,
    role: 'admin',
    email: process.env.ADMIN_EMAIL,
    country: process.env.ADMIN_COUNTRY,
    gender: process.env.ADMIN_GENDER,
    birthDate: new Date(process.env.ADMIN_BIRTHDATE),
    firstName: process.env.ADMIN_FIRSTNAME,
    lastName: process.env.ADMIN_LASTNAME
  });

  try {
    await adminUser.save();
    console.log('Admin user created');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
});
