const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
}).promise()

async function getUsers(){
    const [rows] = await pool.query("SELECT * FROM login_db.users");
    return rows;
}

async function getUser(id){
    const [rows] = await pool.query(`SELECT * FROM login_db.users where id = ?`, [id])
    return rows;
}

async function createUser(email, name, password){
    const [result] = await pool.query(`INSERT INTO login_db.users (email, name, password) VALUES (?, ?, ?)`, [email, name, password]);
    const id = result.insertId;
    return getUser(id);
}

module.exports = {getUser, getUsers, createUser, };