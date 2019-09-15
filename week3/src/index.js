const express = require('express');
const mysql = require('mysql');
const bodyParser= require('body-parser');

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    password: "fat?/1568?/pak",
    user:"root",
    database:"phonebook"
});
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// db.connect((err)=>{
//     console.error(err);
// });
app.get("/", (req,res)=>{
    res.send("hello")
});
// app.get("/add-contact", (req,res)=>{
//     const contact ={
//         "name" :"fatem",
//         "phonenumber" :"91771966"
//     }
// })   
// app.post("/add-contact",(req,res)=>{
//     console.log(req.body);
//     const contact = req.body;
//     db.query("INSERT INTO contacts SET ?",contact ,(err,result ,query)=>{
//         if(err){
//             console.error(err);
//         }
//         if(!err){
//             res.send("contact added successfully!")
//         }
//     })
// })
app.get("/contact/:id",(req,res)=>{
        const id = req.params.id;
        db.query("select * from contacts where idcontacts=?",id ,(err,result ,query)=>{
            if(err){
                console.error(err);
                throw err;
            }
            
            res.send(result);
            
        })
    })
app.listen(3000 , ()=>{
    console.log("server is running at 3000 localhost");
})