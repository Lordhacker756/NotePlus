const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Notes = require("../models/Notes")
const { body, validationResult } = require('express-validator');


//----------------------------------------------------------------------GET ALL NOTES--------------------------------------------------------------------------
//Gets us all the notes of the current logged in user
router.get('/fetchallnotes', fetchuser, async(req, res) => {
    userId = req.user.id //retrive the id set by the middleware as per the JWT
    const notes = await Notes.find({ user: userId })
    res.status(200).json(notes);
})


//----------------------------------------------------------------------ADD NEW NOTES--------------------------------------------------------------------------
router.post('/addnote', fetchuser, [
    //Some primary checks for notes
    body('title', "Title must be atleast 10 charchters").isLength({ min: 10 }),
    body('title', "Title must be less than 280 characters").isLength({ max: 280 }),
    body('description', "Description must be less than 10000 characters").isLength({ max: 10000 }),
], async(req, res) => {
    const errors = validationResult(req); //Error has all the errors found in middleware
    if (!errors.isEmpty()) { //If the errors were there, ie error not empty
        return res.status(400).json({ errors: errors.array() }); //Return an error
    }

    try {
        userId = req.user.id //retrive the id set by the middleware as per the JWT
            //Now add the data sent as per the schema + the userID

        note = await Notes.create({ //This method returns a promise
            user: userId,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            date: req.body.date
        })
        res.status(200).send(note);
    }
    //Some problem with server
    catch (error) {
        res.status(500).json({ msg: "Some error in the server, contact admin" })
    }
})




module.exports = router