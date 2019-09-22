const express = require('express');
const studentRouter = express.Router();
const Student = require("./student");

studentRouter.get('/', (req,res)=>{
    res.send([]);
})
studentRouter.post('/', (req,res)=>{
    const {body}= req;
    const student = new Student(body);
    res.send(student);
})

module.exports ={
    studentRouter
}