const express = require('express');
const app = express();
const connectionWithDB = require("./db");
const farmer = require("./farmerschema.js");
const retailer = require("./retailerSchema.js");
app.use(express.json());
connectionWithDB();
app.get("/", (req, res) => {
    res.send("hello from backend");
})
app.post("/Farmer", async (req, res) => {
    try {
        const { farmername, contact, Email, password, District } = req.body;
        await farmer.create({
            name: farmername,
            contact: contact,
            Email: Email,
            password: password,
            District: District,
        });
        res.send("Farmer added successfully!");
    } catch (error) {
        console.error(error);
    }
});
app.get("/find_farmer", async (req, res) => {
    const all_farmer = await farmer.findOne({ "name": "harshit singh" });
    console.log(all_farmer);
    res.send("fetched the data");
})
app.delete("/deleteFarmer", async (req, res) => {
    try {
        const { District } = req.body;

        const result = await farmer.findOneAndDelete({ District });

        if (result) {
            res.send("Farmer deleted successfully!");
        } else {
            res.status(404).send("Farmer not found.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the farmer.");
    }
});
app.post("/Retailer", async (req, res) => {
    try {
        const { retailername, contact, Email, password, District } = req.body;
        await retailer.create({
            name: retailername,
            contact: contact,
            Email: Email,
            password: password,
            District: District,
        });
        res.send("retailer added successfully!");
    } catch (error) {
        console.error(error);
    }
});
app.get("/find_retailer", async (req, res) => {

    const retailer_find = await retailer.findOne({ "name": "vivek singh" });
    console.log(retailer_find);
    res.send("fetched the data");
})
app.post("/deleteRetailer", async (req, res) => {
    try {
        const { name } = req.body;

        const result = await retailer.findOneAndDelete({ name });

        if (result) {
            res.send("Retailer deleted successfully!");
        } else {
            res.status(404).send("Retailer not found.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the retailer.");
    }
});
app.listen(2000, () => {
    console.log("app is listening on port number 2000");
})