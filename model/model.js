const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    entry: {
        type: Number,
    }
},{
    timestamps: true
})

module.exports = mongoose.model("expense", newSchema)