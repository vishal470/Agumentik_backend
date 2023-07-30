const express = require("express");
const { ContentModel } = require("../model/Content.js");

const contentRouter = express.Router();

contentRouter.get('/', async (req, res) => {
    try {
        const data = await ContentModel.findById("64c68865747af066099a18f3");
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

contentRouter.patch('/:id', async (req, res) => {
    try {
        const data = await ContentModel.findByIdAndUpdate("64c68865747af066099a18f3", { $set: req.body }, { new: true });
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

contentRouter.post('/', async (req, res) => {
    try {
        const newContent = new ContentModel(req.body);
        await newContent.save();
        res.json(newContent);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports.contentRouter = contentRouter;
