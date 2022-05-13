//Notice just like react components, naming of mongoose models also begin with caps

const mongoose = require('mongoose')

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

module.exports = mongoose.model("user", UserSchema)