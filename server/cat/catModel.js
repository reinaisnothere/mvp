var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  name: String,

  age: String,
  
  description: String,

  photo: String,

  'contact-name': String,

  phone: String,

  email: String,

  zip: String

});

module.exports = mongoose.model('Cat', CatSchema);
