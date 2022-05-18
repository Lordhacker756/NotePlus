const mongoose = require('mongoose');

//const mongoURI = "mongodb+srv://adminkabaap:getup-backdrop0-catalog@notepluscluster.o9uc0.mongodb.net/NotePlus";
const mongoURI = "mongodb://localhost:27017/noteplus";

const connectDB = async() => {
    const connection = await mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to mongo!")
    })

}

module.exports = connectDB