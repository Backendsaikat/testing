const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./connect.js'); // Import the User model

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Home page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Create a user
app.post("/user", async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(400).send("Error creating user: " + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
