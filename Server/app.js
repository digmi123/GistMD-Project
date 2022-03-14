require('dotenv').config()
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const express = require('express')
const app = express()
// require('./db')
const patientRoutes = require('./routes/patients')


app.use(cors())
app.use(express.json())

app.use("/patients", patientRoutes)

mongoose.connect(
    process.env.DB_CONNECTION, () =>{
    console.log("Connected to database"
    );
})

app.listen('5000', ()=>{
    console.log("Server started on port 3000")
})

