const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
    console.log("Hello World!");
    res.send("!");
});

app.listen(3001, () => {
    console.log("Server is running");
});
