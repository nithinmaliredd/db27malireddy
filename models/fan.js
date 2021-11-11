const mongoose = require("mongoose")
const fanSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: Number
})
module.exports = mongoose.model("fan", fanSchema)
