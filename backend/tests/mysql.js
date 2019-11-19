const mysql = require('mysql2');
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_SCHEMA;

const connection = mysql.createConnection({ host, port, user, password, database });

connection.ping((error, response) => {
    if (error) {
        return console.log('Erro ao conectar ao banco de dados');
    } else {
        console.log('Banco conectado com sucesso');
    }
});