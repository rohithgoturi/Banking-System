const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;

    await mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database connected to the server");
    })

    .catch((err) => {
        console.log(err);
        console.log("Error in connecting database with the server");
        process.exit(1);
    })
}

module.exports = connectDB;