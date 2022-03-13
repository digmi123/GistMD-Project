const express = require('express')
const router = express.Router();

const PatientController = require('../controllers/patients')

router.get("/getPatients", PatientController.getPatients);
router.get("/getPatient/:id", PatientController.getPatientById);
router.post("/addPatient", PatientController.postPatient);
router.delete("/deletePatient/:id", PatientController.deletePatientById);
router.put("/updatePatient/:id", PatientController.updatePatientById);


module.exports = router;