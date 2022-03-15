const dbObj = require('../db')
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

        //res.send("User found");
        res.json(patient)

    }catch(err){
        return res.status(400).send("Unable to find user")
    }
}


module.exports.postPatient = async (req,res)=>{
    const patient = new Patient({
    name:req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    language:req.body.language,
    procedure:req.body.procedure
    });

    try{
        const savedPatient = await patient.save();
        return res.send("Patient added sucessfuly");
    }catch(err) {
        return res.status(400).send("Unable to create user")
    }
}

module.exports.deletePatientById = async (req, res)=>{
    try{
        const removedPatient = await Patient.findOneAndRemove({ _id:req.params.id });
        return res.send("User deleted sucessfuly");

    }catch(err){
        return res.status(400).send("Unable to delete user")
    }
}
