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

app.post("/api/route", (req, res) => {
    const newRoute = async () => {
        const { startingPlace, destination } = req.body;
        const route = new Route({ startingPlace, destination });
        await route.save();
    };
    newRoute();
    res.json({ response: "Request noticed!" });
});

app.listen(3001, () => {
    console.log("Server is running");
});
