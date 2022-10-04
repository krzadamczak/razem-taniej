const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Route = require("./Schemas/Route");
const User = require("./Schemas/User");
const cors = require("cors");

app.use(cors());

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
        const {
            startingPlace,
            destination,
            departureDate,
            departureTime,
            arrivalTime,
            arrivalDate,
            animals,
            createdBy,
            availableSeats,
        } = req.body;
        console.log(req.body);
        const route = new Route({
            startingPlace,
            destination,
            departureDate,
            departureTime,
            arrivalTime,
            arrivalDate,
            animals,
            createdAt: new Date(),
            modifiedAt: new Date(),
            createdBy,
            availableSeats,
        });
        console.log({ route });
        await route.save();
    };
    newRoute();
    res.sendStatus(200);
});
app.get("/", (req, res) => {
    res.json({ msg: "OK" });
});
app.get("/api/routes", (req, res) => {
    const getRoutes = async () => {
        const routes = await Route.find({}).sort({ createdAt: -1 });
        res.json(routes);
    };
    getRoutes();
});

app.post("/api/users", (req, res) => {
    const saveUser = async () => {
        const { user_id, email } = req.body.payload;
        const user = new User({
            userId: user_id,
            email,
        });

        await user.save();
    };
    saveUser();
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running");
});
