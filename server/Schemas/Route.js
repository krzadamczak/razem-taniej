const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    startingPlace: String,
    destination: String,
    departureTime: String,
    arrivalTime: String,
    departureDate: Date,
});

module.exports = mongoose.model("Route", routeSchema);
