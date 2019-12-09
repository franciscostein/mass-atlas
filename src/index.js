const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`\nServidor inicializado na porta: ${port}\n`);
});