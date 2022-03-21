const Patient = require('../models/Patient');


module.exports.getPatients = async (req,res)=>{
    try{
        const patients = await Patient.find();
        res.json(patients);
    }catch(err){
        res.json({message: err});
    }
}

module.exports.getPatientById = async (req,res)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        res.json(patient)

    }catch(err){
        return res.status(400).send("Unable to find patient")
    }
}


module.exports.postPatient = async (req,res)=>{
    // const patient = new Patient({
    // name:req.body.name,
    // gender:req.body.gender,
    // age:req.body.age,
    // language:req.body.language,
    // procedure:req.body.procedure
    // });
    const patient = new Patient(req.body)

    try{
        const savedPatient = await patient.save();
        return res.send("Patient added successfully");
    }catch(err) {
        return res.status(400).send("Unable to create patient")
    }
}

module.exports.updatePatientById = async (req,res)=>{
    try{
        updatedPatient = req.body
        await Patient.findByIdAndUpdate({_id:req.params.id}, updatedPatient);
        return res.status(200).send("Patient updated successfully");
    }catch(err){
        return res.status(400).send("Unable to update patient")
    }
}


module.exports.deletePatientById = async (req, res)=>{
    try{
        const removedPatient = await Patient.findOneAndRemove({ _id:req.params.id });
        return res.send("Patient deleted successfully");

    }catch(err){
        return res.status(400).send("Unable to delete patient")
    }
}
