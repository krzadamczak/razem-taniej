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
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    availableSeats: Number,
    reservations: {
        confirmed: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        unconfirmed: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        rejected: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
});

module.exports = mongoose.model("Route", routeSchema);
