const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: (value) => `${value} no es un email válido`,
    },
    required: true,
  },
  webinarList: {
    type: Date,
    // required: true,
    default: process.env.ACTIVE_CAMPAIGN_LIST_ID,
  },
  cdate: {
    type: Date,
    // required: true,
  },
  udate: {
    type: Date,
    // required: true,
  },
  links: {
    type: Array,
    // required: true,
  },
  hash: {
    type: String,
    // required: true,
  },
  id: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
