const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    await mongoose.connect(MONGO_URI)

    .then(()=> {
        console.log("connected to DB");
    })

    .catch((err) => {
        console.log(err);
        console.log("error in connecting with backend")
        process.exit(1);
    })
}

modules.export = connectDB;