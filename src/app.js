const express = require('express');
const cors = require('cors');
const estabelecimentoRouter = require('./routes/estabelecimento');
const categoriaRouter = require('./routes/categoria');

const app = express();

app.use(cors());    // enable all CORS requests
app.use(express.json()); // accept and convert json to object
app.use(express.urlencoded({ extended: true }));
app.use(estabelecimentoRouter);
app.use(categoriaRouter);

module.exports = app;