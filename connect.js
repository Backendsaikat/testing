const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user", {
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