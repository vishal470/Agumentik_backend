const mongoose = require("mongoose");

const NumberSchema = new mongoose.Schema({
    year: { type: String, required: true },
    client: { type: String, required: true },
    project: { type: String, required: true },
    award: { type: String, required: true },
});

module.exports.NumberModel = mongoose.model("number", NumberSchema);
