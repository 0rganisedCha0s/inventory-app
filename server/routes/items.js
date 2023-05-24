const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /item/id
router.get('/:id', async (req, res, next) => {
    
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    res.json(item);
  } catch (error) {
    next(error);
    
  }
});

// POST /item
router.post("/add", async (req, res, next) => {
  try {
    let newItem = req.body;
    let createdItem = await Item.create(newItem);
    res.json(createdItem);
  } catch (error) {
    next(error);
  }
});



module.exports = router;
