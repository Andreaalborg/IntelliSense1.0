const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // For email verification
  verificationCode: { type: String }, // To store verification code
  role: { type: String, default: 'user' }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
