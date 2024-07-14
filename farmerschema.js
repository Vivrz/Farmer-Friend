/* eslint-disable no-undef */

const mongoose = require("mongoose");

const farmerschema = new mongoose.Schema({
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
        trim: true,
        require: true
    },
    District: {
        type: String,
        trim: true,
        require: true
    }

})

const Farmer = mongoose.model("Farmers", farmerschema);

module.exports = Farmer;