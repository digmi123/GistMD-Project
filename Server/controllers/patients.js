const dbObj = require('../db')
const Patient = require('../models/Patient');


module.exports.getPatients = async (req,res)=>{
    // let sql = 'SELECT * FROM patients';
    // let [results] = await dbObj.connection.query(sql)
    // res.json(results)
    try{
        const users = await Patient.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }
}

module.exports.getPatientById = async (req,res)=>{
    // let sql = 'SELECT * FROM patients WHERE id = ?';
    // let [results] = await dbObj.connection.query(sql, req.params.id)
    // res.json(results)
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);

    }catch(err){
        return res.status(400).send("Unable to find user")
    }
}

module.exports.postPatient = async (req,res)=>{
    // let patient = {
    //         name:req.body.name,
    //         gender:req.body.gender,
    //         age:req.body.age,
    //         language:req.body.language,
    //         procedure:req.body.procedure
    //     }
    const patient = new Patient({
    name:req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    language:req.body.language,
    procedure:req.body.procedure
    });

    // let sql = 'INSERT INTO patients SET ?'
    // let results = await dbObj.connection.query(sql, patient)
    // res.send("Patient added sucessfuly")
    try{
        // const hashedPassword = await bcrypt.hash(user.password, 10)
        // user.password = hashedPassword
        const savedPatient = await patient.save();
        return res.send("Patient added sucessfuly");
    }catch(err) {
        return res.status(400).send("Unable to create user")
    }
}

module.exports.deletePatientById = async (req, res)=>{
    // let sql = 'DELETE FROM patients WHERE id=?'
    // let results = await dbObj.connection.query(sql, req.params.id)
    // res.send("User deleted sucessfuly")
    try{
        const removedPatient = await Patient.remove({ _id:req.params.userId });
        return res.send("User deleted sucessfuly");

    }catch(err){
        return res.status(400).send("Unable to delete user")
    }
}

// module.exports.updatePatientById = async (req, res)=>{
//     let sql = 'UPDATE patients SET ? WHERE id=?'
//     let [results] = await dbObj.connection.query(sql, req.params.id, req.body)
//     res.send("User updated sucessfuly")
// }