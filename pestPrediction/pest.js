/* eslint-disable no-undef */

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
const genAI = new GoogleGenerativeAI("AIzaSyDOhsdflOTrT-rFafju3_mtXCzrTIIamB0");

app.use(cors());
app.use(express.json());

app.post('/suggest', async (req, res) => {
    const { crop } = req.body;

    if (!crop) {
        return res.status(400).send('City and crop type are required');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `what are the natural pesticide for the ${crop} crop and show the result in points format and give the points in different lines `;

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

    if (!city || !cropType) {
        return res.status(400).send('City and crop type are required');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `what are the crops which i can grow in ${city} and the croptype is ${cropType}   `;

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
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});