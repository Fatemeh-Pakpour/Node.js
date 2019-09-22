const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {studentRouter} = require('./student-router');

// middleware 

app.use(bodyParser.json());
app.use('*', (req,res,next)=>{
    const {method, path}= req;
    console.log(`${method} ${path}`);
    next();
})
// mount the router
app.use("/student", studentRouter);

// error handler
app.use((err,req,res,next)=>{
    res.json({err})
})


app.listen(3000, ()=>{
    console.log("listing at 3000 prot");
});