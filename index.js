const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const { heroRouter } = require('./routes/hero.js');
const { numberRouter } = require('./routes/number.js');
const { contentRouter } = require('./routes/content.js');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Api is working");
});

app.use('/hero', heroRouter);
app.use('/number', numberRouter);
app.use('/content', contentRouter);

mongoose.connect("mongodb+srv://booknook:Vishal1111@cluster0.xnxlmeg.mongodb.net/booknook?retryWrites=true&w=majority").then(() => {
    console.log("Connected");
});

app.listen(4500, () => {
    console.log("Server is working at 4500");
});
