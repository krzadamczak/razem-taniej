const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Route = require("./Schemas/Route");

dotenv.config();

async function mongooseConnection() {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        auth: {
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        useNewUrlParser: true,
    });
}

mongooseConnection();

app.use(bodyParser.json());

app.post("/api/routes", (req, res) => {
    const newRoute = async () => {
        const { startingPlace, destination, departureDate, departureTime, arrivalTime, arrivalDate, animals } =
            req.body;
        const route = new Route({
            startingPlace,
            destination,
            departureDate,
            departureTime,
            arrivalTime,
            arrivalDate,
            animals,
        });
        console.log({ route });
        await route.save();
    };
    newRoute();
    res.json({ response: "Request noticed!" });
});

app.get("/api/routes", (req, res) => {
    const getRoutes = async () => {
        const routes = await Route.find({});
        res.json(routes);
    };
    getRoutes();
});

app.listen(3001, () => {
    console.log("Server is running");
});
