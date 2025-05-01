/* eslint-disable no-undef */
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
function connectionWithDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.error("Error connecting to DB:", err);
    });
}
module.exports = connectionWithDB;


