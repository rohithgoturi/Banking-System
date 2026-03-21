const app = require('./src/app')
require('dotenv').config();
const connectDB = require('./src/config/db');
connectDB();

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
    console.log("server is running on port 3000");
})