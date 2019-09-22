const express = require('express');
const studentRouter = express.Router();
const Student = require("./student");

studentRouter.get('/', (req,res)=>{
    res.send([]);
})
studentRouter.post('/', (req,res,next)=>{
    const {body}= req;
    try{
    const student = new Student(body);
    res.send(student);
    } catch(err){
        res.status(400);
        next(err);
    } 
})

module.exports ={
    studentRouter
}