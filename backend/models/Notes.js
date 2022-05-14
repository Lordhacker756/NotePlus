//Notice just like react components, naming of mongoose models also begin with caps

const mongoose = require('mongoose')
const { Schema } = mongoose; //To use schema we need to import it

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //🔶We are linking the ObjectID from the user collection with notes collection🔶
        ref: "user"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Notes = mongoose.model("Notes", notesSchema)
module.exports = Notes