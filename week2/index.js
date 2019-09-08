var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use(function(req , res, next){
    const secret = req.query.secret;
    if(secret !== "radek"){
        res.status(404).send("No access hacker!");
        return;
    }
    next();
   
});
app.get('/', function (req, res) {
  res.send('hello world')
});
app.get('/contact' ,function(req, res){
    // vvv();

    res.send('hello contact')
});
app.get('/educations/:university',function(req, res){
    console.log(req.query);
    res.send(`${req.params.university},${req.query.id}`)
    })

app.use(function(err , req , res, next){
    console.error("Error Middleware caught an error!", err);
    const errorResponse ={
        err : err.toString(),
        url:req.originalUrl
    };
    next(err);
    res.status(500).send(errorResponse);
} );


    // res.send(`test ok! = ${req.query.}`)

// app.get('/skills' ,function(req, res){
//     const skills = ["mysql", "css", "react"];
//     res.send(skills);
// })



app.listen(3000);