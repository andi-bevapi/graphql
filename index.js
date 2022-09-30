const express = require("express");
require("dotenv").config;
const app = express();
const PORT = process.env.PORT || 4545;
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const cors = require("cors");
const colors = require("colors");

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema:,
      graphiql: process.env.NODE_ENV === 'development'
    }),
  );

app.listen(`${PORT}`,() =>{
    console.log(`app is running on port ${PORT}`)
});