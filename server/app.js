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
        const routes = await Route.find({})
            .populate("createdBy", "-routesCreated -myReservations")
            .sort({ createdAt: -1 });
        console.log("xxxxxxxxxxxxxxxxxxxx", routes);
        res.json(routes);
    };
    getRoutes();
});

app.put("/api/routes/reservations", (req, res) => {
    const makeAReservation = async () => {
        const user = await User.findOne({ userId: req.body.userId });
        const route = await Route.findById(req.body.routeId);

        if (route.createdBy.toString() === user._id.toString()) {
            return res.json({ msg: "Nie możesz zarezerwować własnego przejazdu" });
        }
        if (
            route.reservations.unconfirmed.some((item) => {
                return item.toString() === user._id.toString();
            })
        ) {
            console.log("Tylko jedna rezerwacja");
            return res.json({ msg: "Możesz zgłosić tylko jedną rezerwację" });
        }
        user.myReservations.push(route._id);
        route.reservations.unconfirmed.push(user._id);
        user.save();
        route.save();
        res.status(200).json({ msg: "Rezerwacja została złożona" });
    };
    makeAReservation();
});
app.get("/api/routes/reservations", (req, res) => {
    const getReservations = async () => {
        const user = await User.findOne({ userId: req.params.id }).populate("myReservations", "-routesCreated");
        res.json(user);
    };
    getReservations();
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
        const user = await User.findOne({ userId: req.params.id }).populate([
            {
                path: "routesCreated",
                populate: [
                    {
                        path: "reservations.confirmed",
                        model: "User",
                        select: "-routesCreated -myReservations",
                    },
                    {
                        path: "reservations.unconfirmed",
                        model: "User",
                        select: "-routesCreated -myReservations",
                    },
                    {
                        path: "reservations.rejected",
                        model: "User",
                        select: "-routesCreated -myReservations",
                    },
                ],
            },
            {
                path: "myReservations",
                select: "-reservations",
            },
        ]);

        console.log("🚀 ~ getUser ~ user", user);
        res.json(user);
    };
    getUser();
});
app.put("/api/test", (req, res) => {
    const handleReservation = async () => {
        const user = await User.findById(req.body.userId);
        const route = await Route.findById(req.body.routeId);
        const status = req.body.status;
        console.log("xxxxxxxxxxx", req.body);
        route.reservations.unconfirmed.forEach((reservation, index) => {
            if (reservation.toString() === user._id.toString()) {
                route.reservations.unconfirmed.splice(index, 1);
                if (status === "accept") {
                    route.reservations.confirmed.push(reservation);
                } else {
                    route.reservations.rejected.push(reservation);
                }
                route.save();
                return;
            }
        });
        res.json({ msg: "Succes" });
    };
    handleReservation();
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
