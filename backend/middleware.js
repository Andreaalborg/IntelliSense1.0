// backend/middleware.js

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded;
    if (!req.user.isVerified) {
      return res.status(403).send('Access denied. Email not verified.');
    }
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

module.exports = verifyToken;
