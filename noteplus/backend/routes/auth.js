const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Now we will use router.get insted of app.get


//Create a User using: POST "/api/auth", Doesn't require authentication(logged in)
router.post('/', (req, res) => {
    console.table(req.body)
    const user = User(req.body);
    user.save();
    res.status(200).json({
        msg: "User Successfuly Registered"
    })
})

module.exports = router