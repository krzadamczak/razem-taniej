const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

async function mongooseConnection() {
    await mongoose.connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`,
        () => {
            console.log("Connected!");
        }
    );
}

mongooseConnection();

app.use(bodyParser.json());

app.post("/api/test", (req, res) => {
    res.json({ response: "Request noticed!" });
});

app.listen(3001, () => {
    console.log("Server is running");
});
