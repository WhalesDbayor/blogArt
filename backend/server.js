const express = require('express');
const blogRouter = require('./routers/blogRouter');
const connectionDB = require('./mongoDB/dbconnection');
require('dotenv').config();

connectionDB();

const server = express();

const port = process.env.PORT || 4000;

// middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routers
server.use('/', blogRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})