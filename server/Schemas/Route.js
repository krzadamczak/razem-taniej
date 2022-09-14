const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    startingPlace: String,
    destination: String,
    departureTime: String,
    departureDate: Date,
    arrivalTime: String,
    arrivalDate: Date,
});

module.exports = mongoose.model("Route", routeSchema);
