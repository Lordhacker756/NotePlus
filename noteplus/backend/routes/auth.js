const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

//Now we will use router.get insted of app.get


//Create a User using: POST "/api/auth", Doesn't require authentication(logged in)
router.post('/register', [ //Performing basic checks before proceeding using expValidaor
    body('name', "Enter a valid name").isLength({ min: 3 }), //We can also add our custom message after parameter to be checked
    body('email', "Enter a valid email").isEmail(),
    body('password', "That's not a good password!").isLength({ min: 8 })
], async(req, res) => {
    const errors = validationResult(req); //Error has all the errors found in middleware
    if (!errors.isEmpty()) { //If the errors were there, ie error not empty
        return res.status(400).json({ errors: errors.array() }); //Return an error
    }
    //No errors in the request
    try {
        //Check if the user with the same email already exists
        let user = await User.findOne({ email: req.body.email }) //🔶findOne returns a promise, we need to await!!!🔶

        if (user) { //User is found, ie user != null, i.e it has a value and is true
            return res.status(403).json({ msg: "User already registered!" }) //Send a proper response
        }

        //  Now if the user is unique we create the user!    
        user = await User.create({ //This method returns a promise
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.json({ //If successful
            msg: "User Registered Successfully" //we return a json message
        })

    }
    //In case of error with server
    catch (err) {
        console.log(err) //We log the error and return the response
        res.status(500).json({
            msg: "something went wrong with the server, contact admin"
        })
    }
})

module.exports = router