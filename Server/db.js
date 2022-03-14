// const mysql = require('mysql2/promise')
// const dbObj = {}
const { default: mongoose } = require('mongoose');


// // Create the connection
//     mysql.createConnection({
//     host:process.env.host,
//     user:process.env.user,
//     password:process.env.password,
//     database:process.env.database
// }).then((connection)=>{
//     dbObj.connection = connection
//     console.log("Connected to database");
// })

// module.exports = dbObj

//Connect to db:
// mongoose.connect(
//     process.env.DB_CONNECTION, () =>{
//     console.log("Connected to database"
//     );
// })