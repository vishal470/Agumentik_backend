const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    img: { type: String, required: true },
    card1: { type: String, required: true },
    cardDetail: { type: String, required: true },
    card2: { type: String, required: true },
    card3: { type: String, required: true },
    card4: { type: String, required: true },
});

module.exports.ContentModel = mongoose.model("content", ContentSchema);
