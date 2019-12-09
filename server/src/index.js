const express = require('express');
const app = require('./app');
const path = require('path');
const port = process.env.PORT;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../../client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(port, () => {
    console.log(`\nServidor inicializado na porta: ${port}\n`);
});