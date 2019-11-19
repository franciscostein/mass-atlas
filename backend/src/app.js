const express = require('express');

const app = express();

app.use(express.json()); // accept and convert json to object

module.exports = app;