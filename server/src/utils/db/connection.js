const mysql = require('mysql');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_SCHEMA;

const connection = mysql.createConnection({ host, port, user, password, database });

connection.connect(error => {
	if (error) throw error;
});

module.exports = connection;