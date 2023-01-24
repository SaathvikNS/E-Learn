const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
})

conn.connect(function(err){
    if(err){
        console.log("Couldn't connect to the database.")
    }else{
        console.log("Connection to database successful.")
    }
})

module.exports = conn;