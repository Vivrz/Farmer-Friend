/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const app = express();
const connectionWithDB = require("./DB.js");
const farmer = require("./farmerschema.js");
const retailer = require("./retailerSchema.js");
const scheme = require("./schemeschema.js")
app.use(express.json());
connectionWithDB();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get("/", (req, res) => {
    res.send("hello from backend");
})

app.post("/AddScheme", async (req, res) => {

    try {
        console.log(req.body);
        const { name, link } = req.body;
        await scheme.create({
            schemename: name,
            schemeLink: link
        });
        res.status(200).send("scheme added successfully!");
    } catch (error) {
        console.error(error);
    }
});
app.get("/FetchScheme", async (req, res) => {
    try {
        const allschemes = await scheme.find();
        res.send(allschemes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});
app.delete("/deleteScheme", async (req, res) => {
    try {
        const { schemename } = req.body;

        const result = await scheme.findOneAndDelete({ schemename });

        if (result) {
            res.send("Scheme deleted successfully!");
        } else {
            res.status(404).send("Scheme not found.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the scheme.");
    }
});

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
    const all_farmer = await farmer.find();
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
