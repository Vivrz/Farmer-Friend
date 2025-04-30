/* eslint-disable no-undef */
const mongoose = require("mongoose");

const retailerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    contact: {
        type: Number,
        require: true,
    },
    Email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    District: {
        type: String,
        trim: true,
        require: true
    }

})

const retailer = mongoose.model("retailers", retailerSchema);

module.exports = retailer;