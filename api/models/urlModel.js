'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var URLSchema = new Schema({
  url: {
    type: String,
    required: 'Enter the URL you want to shorten'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  shortToken: {
    type: String
  },
});

module.exports = mongoose.model('URLs', URLSchema);
