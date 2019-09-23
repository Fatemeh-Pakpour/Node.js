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
    connectionLimit: 10,
    host,
    user,
    password,
    database,
    port,
    multipleStatements: true
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