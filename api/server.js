// build your server here and require it from index.js

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send("Hello, World!");
})



module.exports = server;
