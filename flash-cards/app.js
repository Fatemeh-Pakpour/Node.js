const express = require('express');
const app = express();

const cards = require('./routes/cards');
app.use('/cars', cards);

app.listen(3000, ()=>{
    console.log('the server is running on localhost:3000');
})