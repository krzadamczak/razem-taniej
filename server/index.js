const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api/test", (req, res) => {
    res.json({ response: "Request noticed!" });
});

app.listen(3001, () => {
    console.log("Server is running");
});
