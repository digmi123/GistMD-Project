require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
require('./db')
const patientRoutes = require('./routes/patients')


app.use(cors())
app.use(express.json())

app.use("/patients", patientRoutes)

app.listen('3000', ()=>{
    console.log("Server started on port 3000")
})

