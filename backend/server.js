const express = require('express');
const blogRouter = require('./routers/blogRouter');
const connectionDB = require('./mongoDB/dbconnection');
const userRouter = require('./routers/userRouter');
require('dotenv').config();

connectionDB();

const server = express();

const port = process.env.PORT || 4000;

// middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routers
server.use('/', blogRouter);
server.use('/', userRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})