const connectDB = require('./db')
const express = require("express")
const app = express();

//Connecting to database
connectDB();

app.get("/", (req, res) => {
    res.status(200).send("Hey there!")
})

app.listen(4000)