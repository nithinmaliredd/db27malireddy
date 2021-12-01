const mongoose = require("mongoose")
const fanSchema = mongoose.Schema({
    brand: {
        type: String,
        minLength: 4
    },
    material: {
        type: String,
        minLength: 4
    },
    cost: Number
})

module.exports = mongoose.model("fan",
    fanSchema)