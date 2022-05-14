//Notice just like react components, naming of mongoose models also begin with caps
const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("user", UserSchema)
    //User.createIndexes(); Prevents duplicate entry of unique type data into the database but we will write it's own logic
module.exports = User