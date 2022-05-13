const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://adminkabaap:getup-backdrop0-catalog@ecommerce.kimdb.mongodb.net/test";

const connectDB = async() => {
    const connection = await mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to mongo!")
    })

}

module.exports = connectDB