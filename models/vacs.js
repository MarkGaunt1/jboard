const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const VacsSchema = new Schema({
  jobref: {
    type: String,
    required: [true, 'The Job Reference field is required']
  },
  jobtitle: {
    type: String,
    required: [true, 'The Job Title field is required']
  },
  salary: {
    type: Number,
    default: 0,
  },	
  location: {
    type: String,
    required: [true, 'The location field is required']
  },
  jobdescription: {
    type: String,
    required: [true, 'The Job Description field is required']
  },
});

//create model for todo
const Vacs = mongoose.model('vac', VacsSchema);

module.exports = Vacs;