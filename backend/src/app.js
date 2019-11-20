const express = require('express');
const estabelecimentoRouter = require('./controller/routes/estabelecimento');

const app = express();

app.use(express.json()); // accept and convert json to object
app.use(express.urlencoded({ extended: true }));
app.use(estabelecimentoRouter);

module.exports = app;