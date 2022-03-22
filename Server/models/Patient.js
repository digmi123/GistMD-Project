const mongoose = require('mongoose');
const questionData = require('../questionData');

const converter = (str)=>{
    switch (str)
    {
    case "text":
    case "select":
      return String

    case "number":
      return Number

    default:
      return String
    }
}

const patientSchema ={}
for (const [key, value] of Object.entries(questionData)) {
  patientSchema[key] = {type: converter(value.type), required: value.required}
}

const PatientSchema = mongoose.Schema(patientSchema);

module.exports = mongoose.model('Patients', PatientSchema, 'patients');