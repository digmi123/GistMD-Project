const mysql = require('mysql2/promise')
const dbObj = {}


// Create the connection
    mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
}).then((connection)=>{
    dbObj.connection = connection
    console.log("Connected to database");
})

module.exports = dbObj