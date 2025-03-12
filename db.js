import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

console.log('DB User:', process.env.DB_USER);
console.log('DB Password:', process.env.DB_PASSWORD);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise();

const result = await pool.query("SELECT * FROM users")
console.log(result[0])  