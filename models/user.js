const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 30,
    required: true,
  },
  number: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    required: true,
  },
  email: {
    type: String,
    //required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: (value) => `${value} no es un email válido`,
    },
    //required: true,
  },
  webinarTag: {
    type: Number,
    // required: true,
    //default: process.env.ACTIVE_CAMPAIGN_TAG_ID,
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
  webinarDate: {
    type: Array,
    default: [process.env.WEBINAR_DATE],
  },
});

module.exports = mongoose.model('User', userSchema);
