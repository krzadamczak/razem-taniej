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

        const user = await User.findOne({ userId: createdBy });
        //NOTE: Szukałem po atrybucie createdBy, którego nie było
        //u wcześniejszych użytkowników w Schema dlatego nie wyszukiwało mi użytkownika.

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
            createdBy: user._id,
            availableSeats,
        });

        user.routesCreated.push(route._id);
        user.save();
        console.log({ user });
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

app.put("/api/routes/reservations", (req, res) => {
    const makeAReservation = async () => {
        const user = await User.findOne({ userId: req.body.userId });
        const route = await Route.findById(req.body.routeId);
        console.log(route.potentialReservations[0].toString() === user._id.toString());
        if (
            !route.potentialReservations.some((item) => {
                return item.toString() === user._id.toString();
            })
        ) {
            route.potentialReservations.push(user._id);
            route.save();
        }
        console.log("route", route);
        res.json({ msg: "Możesz zgłosić tylko jedną rezerwację" });
    };
    makeAReservation();
});
app.get("/api/routes/reservations", (req, res) => {
    res.json({ msg: "Test" });
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

app.get("/api/users/:id", (req, res) => {
    const getUser = async () => {
        const user = await User.findOne({ userId: req.params.id }).populate("routesCreated");
        console.log(user);
        res.json(user);
    };
    getUser();
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
