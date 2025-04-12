const mongoose = require('mongoose');
const env = require('dotenv').config(); // Load environment variables from .env file
// MongoDB URL
const url=process.env.url; // Use the URL from the environment variable
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection successful");
})
.catch((e) => {
    console.log("No connection", e);
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema); // Exported as "User"