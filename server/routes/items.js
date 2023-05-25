const express = require("express");
const router = express.Router();
const { Item } = require("../models");


// GET api/items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET api/items/id
router.get('/:id', async (req, res, next) => {
    
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    res.json(item);
  } catch (error) {
    next(error);
    
  }
});

// POST api/items/add
router.post("/add", async (req, res, next) => {
  try {
    let newItem = req.body;
    let createdItem = await Item.create(newItem);
    res.json(createdItem);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/items/id

router.delete('/:id', async (req, res,next) => {
  
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (item) {
      await item.destroy();
      res.json({ message: 'Item deleted successfully' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    next(error);
    
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItem = req.body;

    const item = await Item.findByPk(id);
    if (item) {
      await item.update(updatedItem);
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;