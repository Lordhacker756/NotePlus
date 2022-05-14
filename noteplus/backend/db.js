const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/noteplus";

const connectDB = async() => {
    const connection = await mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to mongo!")
    })

}

module.exports = connectDB