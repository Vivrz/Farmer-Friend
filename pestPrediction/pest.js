/* eslint-disable no-undef */
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { GoogleGenerativeAI } = require('@google/generative-ai');


const app = express();
const port = process.env.PORT || 3000;

// Google AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Store in .env

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// MongoDB Models & Validators
const connectionWithDB = require("./Models/DB.js");
const farmer = require("./Models/farmerschema.js");
const scheme = require("./Models/schemeschema.js");
const { signupValidation, LoginValidation } = require('./Middleware/AuthValidation.js');

// Connect DB
connectionWithDB();

// Routes
app.get("/", (req, res) => {
    res.send("hello from unified backend");
});

// ==== AUTH ====
app.post("/Signup", signupValidation, async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const user = await farmer.findOne({ email });
        if (user) return res.status(409).json({ message: "User already exists", success: false });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new farmer({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

app.post("/Login", LoginValidation, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await farmer.findOne({ email });
        const errorMsg = "Auth failed or wrong password";

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const token = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Login successful", success: true, token, email, name: user.name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

// ==== GEMINI AI Endpoints ====
app.post('/suggest', async (req, res) => {
    const { crop } = req.body;

    if (!crop) return res.status(400).send('Crop is required');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `what are the natural pesticide for the ${crop}, give response in format of a json example : {"points":["point1 data" , "point2 data" , "etc"]} do not include any backticks in the starting and the ending of the response`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        res.status(200).json({ text });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(501).json({ error: error.message });
    }
});

app.post('/Prediction', async (req, res) => {
    const { city, cropType } = req.body;

    if (!city || !cropType) return res.status(400).send('City and crop type are required');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `what are the crops which i can grow in ${city} and the croptype is ${cropType}, give response in format of a json example : {"points":["point1 data" , "point2 data" , "etc"]} do not include any backticks in the starting and the ending of the response`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        res.status(200).json({ text });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(501).json({ error: error.message });
    }
});

// ==== Schemes CRUD ====
app.post("/AddScheme", async (req, res) => {
    try {
        const { name, link } = req.body;
        await scheme.create({ schemename: name, schemeLink: link });
        res.status(200).send("Scheme added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to add scheme.");
    }
});

app.get("/FetchScheme", async (req, res) => {
    try {
        const schemes = await scheme.find();
        res.send(schemes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching schemes");
    }
});

app.delete("/deleteScheme", async (req, res) => {
    try {
        const { schemename } = req.body;
        const result = await scheme.findOneAndDelete({ schemename });

        result ? res.send("Scheme deleted successfully!") :
            res.status(404).send("Scheme not found.");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the scheme.");
    }
});

// ==== Farmer Admin ====
app.post("/Farmer", async (req, res) => {
    try {
        const { farmername, contact, Email, password, District } = req.body;
        await farmer.create({ name: farmername, contact, Email, password, District });
        res.send("Farmer added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding farmer.");
    }
});

app.delete("/deleteFarmer", async (req, res) => {
    try {
        const { District } = req.body;
        const result = await farmer.findOneAndDelete({ District });

        result ? res.send("Farmer deleted successfully!") :
            res.status(404).send("Farmer not found.");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the farmer.");
    }
});

// ==== Server Start ====
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
