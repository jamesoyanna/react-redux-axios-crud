const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
},
{timestamps: true}
)

module.exports = mongoose.model("Tutorial", TutorialSchema);