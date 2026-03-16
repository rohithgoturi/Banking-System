const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/config/db');
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on Port 3000");
})