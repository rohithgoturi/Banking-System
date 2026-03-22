const express = require('express')
const app = express();
const cookieparser = require('cookie-parser')

app.use(express.json())
app.use(express.cookieparser())

modules.export = app;