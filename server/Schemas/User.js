const mongoose = require("mongoose");
//NOTE: Jak stworzyć nowego użytkownika kiedy rejestruje się przez auth0?.
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
