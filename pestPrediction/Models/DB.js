const mongoose = require('mongoose');

function connectionWithDB() {
    mongoose.connect("mongodb://localhost:27017/Farmerfriend").then(() => {
        console.log("connect to db");
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = connectionWithDB;


