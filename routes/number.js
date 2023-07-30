const express = require("express");
const { NumberModel } = require("../model/Number.js");

const numberRouter = express.Router();

numberRouter.get('/', async (req, res) => {
    try {
        const data = await NumberModel.findById("64c682ab3fd8cef89c86cbfe");
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

numberRouter.patch("/:id", async (req, res) => {
    try {
        const numberId = req.params.id; 
        const updatedData = req.body;
        const data = await NumberModel.findByIdAndUpdate(
            { _id: numberId }, 
            { $set: updatedData },
            { new: true }
        );

        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

numberRouter.post('/', async (req, res) => {
    try {
        const newNumber = new NumberModel(req.body);
        await newNumber.save();
        res.json(newNumber);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports.numberRouter = numberRouter;
