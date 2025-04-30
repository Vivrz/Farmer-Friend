/* eslint-disable no-undef */

const mongoose = require("mongoose");

const schemesschema = new mongoose.Schema({
    schemename: {
        type: String,
        require: true,
        trim: true
    },
    schemeLink: {
        type: String,
        trim: true
    },
})

const Schemes = mongoose.model("Schemes", schemesschema);

module.exports = Schemes;