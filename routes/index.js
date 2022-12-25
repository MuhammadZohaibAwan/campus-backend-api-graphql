const { graphqlHTTP } = require('express-graphql');
const executableSchema = require('../models/index');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const auth = require('../middleware/auth')

app.use(bodyParser.json());

module.exports.routes = (app) => {
    app.use(
        "/graphql",
        bodyParser.json(),
        // auth, auth not working here = Cannot read properties of undefined (reading 'headers')
        graphqlHTTP({
            schema: executableSchema,
            graphiql: true,
        }));
};