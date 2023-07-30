const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    paragraph: { type: String, required: true }
});

module.exports.HeroModel = mongoose.model("hero", HeroSchema);
