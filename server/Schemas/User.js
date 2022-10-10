const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userId: String,
    routesCreated: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Route",
        },
    ],
});

module.exports = mongoose.model("User", userSchema);
