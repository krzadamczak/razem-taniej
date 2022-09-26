const mongoose = require("mongoose");
//NOTE: Kto stworzył notatkę? Mogę użyć do tego atrybutu sub z obiektu user (auth0)
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
});

module.exports = mongoose.model("Route", routeSchema);
