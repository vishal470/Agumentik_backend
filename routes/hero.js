const express = require("express");
const { HeroModel } = require("../model/Hero.js");

const heroRouter = express.Router();

heroRouter.get('/', async (req, res) => {
    try {
        const data = await HeroModel.findById("64c67d37a3d9e38bb53aaab3");
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


heroRouter.patch("/:id", async (req, res) => {
    try {
      const heroId = req.params.id; 
      const updatedData = req.body; 
  
      const data = await HeroModel.findByIdAndUpdate(
        { _id: heroId }, 
        { $set: updatedData },
        { new: true }
      );
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



heroRouter.post('/', async (req, res) => {
    try {
        const newHero = new HeroModel(req.body);
        await newHero.save();
        res.json(newHero);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports.heroRouter = heroRouter;
