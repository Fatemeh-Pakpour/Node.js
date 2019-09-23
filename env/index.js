const mysql = require("mysql");
require("dotenv").config();
const {
 USER: user,
 PASSWORD: password,
 HOST: host,
 DATABASE: database,
 PORT: port
} = process.env;
const db = mysql.createConnection({
 user:"root",
 password:"1568",
 host:"localhost",
 database:"phonebook"
});
db.connect();
 db.end();
// db.getConnection((err,connection)=>{
//     console.log({
//         err,connection
//     });
//     if(connection){
//         connection.release();
//     }
// })