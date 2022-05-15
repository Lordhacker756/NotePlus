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

//----------------------------------------------------------------------UPDATE NOTES--------------------------------------------------------------------------
router.put("/updatenote/:id", fetchuser, [
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
        // Lets extreact the data sent by user
        const { title, description, tag } = req.body;
        //We will create a new note object
        const newNote = {}
            //Check if the values are sent, if sent then add them to the object
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Let's find the note by it's id and update it with our data
        let note = await Notes.findById(req.params.id);
        if (!note) { res.status(404).send("Note not found") }

        //Check if the note belong to the user who is sending the request
        if (note.user.toString() !== req.user.id) {
            res.status(401).send("Invalid access")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            //This new true means if there is new note, it will create it
        res.status(200).send(note);
    } catch (error) {
        res.status(500).json({ msg: "Some error in the server, contact admin" })
    }
})


//----------------------------------------------------------------------DELETE NOTES--------------------------------------------------------------------------
router.delete("/deletenote/:id", fetchuser, async(req, res) => {

    try {
        //Let's find the note by it's id and update it with our data
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send("Note not found")
        } else {
            //Check if the note belong to the user who is sending the request
            if (note.user.toString() !== req.user.id) {
                res.status(401).send("Invalid access")
            } else {
                //Now if everything is alright we will delete the note
                note = await Notes.findByIdAndDelete(req.params.id)
                res.status(200).send("Note delete successfully!")
            }
        }
    } catch (error) {
        res.status(500).send("There is some error with the server, please contact admin")
        console.log(error)
    }
})

module.exports = router