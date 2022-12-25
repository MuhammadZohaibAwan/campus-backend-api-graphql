const express = require('express');
const routeModule = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    autoIndex: true,
})
    .then((_result) => {
        console.log("Database connected")
    }).catch((err) => {
        console.log(err);
    })

routeModule.routes(app);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})

module.exports = app;