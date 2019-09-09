const express = require("express");
const router = express.Router();
const { data } = require("../data/flashCardData.json");
const { cards } = data;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { side } = req.query;
  res.json(`${cards[id][side]}`);

});

module.exports = router;
