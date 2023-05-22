const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

// GET /sauce/id
router.get('/:id', async (req, res, next) => {
    
  try {
    const { id } = req.params;
    const sauce = await Sauce.findByPk(id);
    res.json(sauce);
  } catch (error) {
    next(error);
    
  }
});






module.exports = router;
