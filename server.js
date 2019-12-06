const express = require('express');

const server = express();

const actionRouter = require("./data/helpers/actionRouter.js")
const projectRouter = require("./data/helpers/projectRouter.js")

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Sprint Challenge 1</h2>`);
});

server.use('/action', actionRouter);
server.use('/project', projectRouter);

module.exports = server;