const mongoose = require('mongoose');
const Pothole = mongoose.Schema;

const pothole = new Pothole({
  Lat: {
    type: String,
    required: [true],
  },
  Lng: {
    type: String,
    required: [true],
  },
  Img: {
    type: String,
    required: [true],
  }  
});

module.exports = { pothole };