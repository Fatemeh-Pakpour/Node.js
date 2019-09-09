const express = require('express');
const router = express.Router();
const {data}= require('../data/flashCardData.json');

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const num = Number(id);
    res.json(data.cards[num]);
});



module.exports = router;