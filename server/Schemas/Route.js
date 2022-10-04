const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    startingPlace: String,
    destination: String,
    departureTime: String,
    departureDate: Date,
    arrivalTime: String,
    arrivalDate: Date,
    animals: Boolean,
    createdAt: Date,
    modifiedAt: Date,
    createdBy: String,
    availableSeats: Number,
});

module.exports = mongoose.model("Route", routeSchema);
