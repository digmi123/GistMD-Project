const dbObj = require('../db')


module.exports.getPatients = async (req,res)=>{
    let sql = 'SELECT * FROM patients';
    let [results] = await dbObj.connection.query(sql)
    res.json(results)
}

module.exports.getPatientById = async (req,res)=>{
    let sql = 'SELECT * FROM patients WHERE id = ?';
    let [results] = await dbObj.connection.query(sql, req.params.id)
    res.json(results)
}

module.exports.postPatient = async (req,res)=>{
    let patient = {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            language:req.body.language,
            procedure:req.body.procedure
        }
    let sql = 'INSERT INTO patients SET ?'
    let results = await dbObj.connection.query(sql, patient)
    res.send("Patient added sucessfuly")
}

module.exports.deletePatientById = async (req, res)=>{
    let sql = 'DELETE FROM patients WHERE id=?'
    let results = await dbObj.connection.query(sql, req.params.id)
    res.send("User deleted sucessfuly")
}

module.exports.updatePatientById = async (req, res)=>{
    let sql = 'UPDATE patients SET ? WHERE id=?'
    let [results] = await dbObj.connection.query(sql, req.params.id, req.body)
    res.send("User updated sucessfuly")
}