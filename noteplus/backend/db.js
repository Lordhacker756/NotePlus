const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017";

const connectDB = async() => {
    const connection = await mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to mongo!")
    })

}

module.exports = connectDB