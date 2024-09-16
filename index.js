/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();


const jwt = require('jsonwebtoken');

const {signupValidation , LoginValidation} = require('./Middleware/AuthValidation.js');
const connectionWithDB = require("./Models/DB.js");
const farmer = require("./Models/farmerschema.js");
const retailer = require("./Models/retailerSchema.js");
const scheme = require("./Models/schemeschema.js");

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
app.post("/Signup" ,signupValidation, async(req , res) => {
    try{
        const {name ,   password , email    } = req.body;
        const user = await farmer.findOne({email});
        if(user){
            return res.status(409)
            .json({message : "User is already exist , you can login" , success : false})
        } 
        const hashedPassword = await bcrypt.hash(password, 10);
const userModel = new farmer({ name, email, password: hashedPassword });
await userModel.save();
        res.status(201).
        json({message : "Signup successfully", success : true})
    }
    catch(error){
        console.log(error);
        res.status(500).
        json({message : "Internal server error " ,  success : false })
    }
})


app.post("/Login" ,LoginValidation, async(req , res) => {
    try{
        const { password , email  } = req.body;
        const user = await farmer.findOne({email});
        const errormsg  = "Auth failed or password is wrong !";
        if(!user){
            return res.status(403)
            .json({message : errormsg , success : false})
        }
        const ispassword = await bcrypt.compare(password , user.password);
        if(!ispassword){
            return res.status(403)
            .json({message : errormsg , success : false})
        }

       
        const jwtoken = jwt.sign(
            {email : user.email  , _id : user._id},
            process.env.JWT_SECRET,
            { expiresIn : '24h'}
        )
        
         res.status(200).
        json({message : "Login successfully", success : true , jwtoken  , email , name : user.name})
    }
    catch(error){
        console.log(error);
        res.status(500).
        json({message : "Internal server error " ,  success : false})
    }
})


app.post("/AddScheme", async (req, res) => {x

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
        })
        res.send("Farmer added successfully!");
    } catch (error) {
        console.error(error);
    }
});


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
// app.post("/Retailer", async (req, res) => {
//     try {
//         const { retailername, contact, Email, password, District } = req.body;
//         await retailer.create({
//             name: retailername,
//             contact: contact,
//             Email: Email,
//             password: password,
//             District: District,
//         });
//         res.send("retailer added successfully!");
//     } catch (error) {
//         console.error(error);
//     }
// });
// app.get("/find_retailer", async (req, res) => {

//     const retailer_find = await retailer.findOne({ "name": "vivek singh" });
//     console.log(retailer_find);
//     res.send("fetched the data");
// })
// app.post("/deleteRetailer", async (req, res) => {
//     try {
//         const { name } = req.body;

//         const result = await retailer.findOneAndDelete({ name });

//         if (result) {
//             res.send("Retailer deleted successfully!");
//         } else {
//             res.status(404).send("Retailer not found.");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred while deleting the retailer.");
//     }
// });
app.listen(2000, () => {
    console.log("app is listening on port number 2000");
})
