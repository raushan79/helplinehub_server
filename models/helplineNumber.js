const mongoose = require('mongoose');

const helplineNumberSchema = new mongoose.Schema({
  helplineNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('HelplineNumber', helplineNumberSchema);
