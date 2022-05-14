const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const fetchuser = require("../middleware/fetchuser")

//Now we will use router.get insted of app.get

//Let's create a secret to sign our JWT
const JWT_SECRET = "$2a$10$yU.xIiS0dMjb2fu7ePAE8uwwRs1NSK4FaQzUMRjSRrpTGgV3Srh7O"


//----------------------------------------------------------------------REGISTER ONE---------------------------------------------------------------------------
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

        //But first let's secure the password with some 🧂😜
        const namkeenPassword = await bcrypt.hash(req.body.password, 10) //It returns a promise so we need to wait for our namkeen wala password

        user = await User.create({ //This method returns a promise
            name: req.body.name,
            email: req.body.email,
            password: namkeenPassword
        })

        const data = {
                user: {
                    id: user.id
                }
            }
            //Let's sign✒️ our JWT
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ //If successful
            msg: "User Registered Successfully",
            authToken: authToken //we return a json message
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


//----------------------------------------------------------------------LOGIN ROUTE----------------------------------------------------------------------------
//Authenticate a user (No Longer requried)
router.post("/login", [
    body('email', "Please enter a valid email/password").isEmail(),
    body('password', "Password can't be blank!").exists(),
    body('password', "Please enter a valid email/password").isLength({ min: 8 })
], async(req, res) => {
    //If errors are found in the email or password
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    try {
        //Okay so it's a valid email and password
        const userExists = await User.findOne({ email: req.body.email }) //Lets check if that email exists on the database or not

        if (userExists) { //An array is returned
            const valid = await bcrypt.compare(req.body.password, userExists.password)
                //We compare the given password with the hash stored in our database, and if they are same we get the value of valid as true
            if (valid) {
                //Okay it is a valid login 
                const data = {
                        user: {
                            id: userExists.id
                        }
                    }
                    //Let's sign✒️ our JWT
                const authToken = jwt.sign(data, JWT_SECRET)
                res.json({
                    msg: "User Loggedin Successfully",
                    authToken: authToken //we return a JWT to the user
                })

            } else //Incorrect password!
                res.status(403).json({ msg: "Please provide valid credentials" })
        } else {
            //Incorrect email!
            res.status(403).json({ msg: "Please provide valid credentials" })
        }
    }
    //If there is some problem with the server
    catch (error) {
        res.status(500).json({ msg: "There is some error in the server, please contact admin!" })
    }
})

//----------------------------------------------------------------------ROUTE ONE-----------------------------------------------------------------------------
//Get logged in user details LOGIN IS REQUIRED!
router.post("/getuser", fetchuser, async(req, res) => {
    //If errors are found in the email or password
    try {
        userID = req.user.id; //Fetching the id of the user added in the req
        const user = await User.findById(userID).select("-password") //Find the user and select everything except the password and store it in user
        console.log(user)
            //res.sendStatus(200).json({ msg: "Valid user!" })
        res.send(user)
    }
    //Any error with the server
    catch (error) {
        res.status(500).json({ msg: "There is some error in the server, please contact admin!" })
    }
})




module.exports = router