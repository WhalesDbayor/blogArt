const express = require('express');
const blogRouter = require('./routers/blogRouter');

const server = express();

const port = process.env.PORT || 4000;

// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

server.use('/', blogRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})