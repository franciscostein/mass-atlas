const mysql = require('mysql');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_SCHEMA;

const connection = mysql.createConnection({ 
	host, 
	port, 
	user, 
	password, 
	database,
	typeCast: function castField(field, useDefaultTypeCasting) {
		
        // Only cast bit fields that have a single-bit in them. If the field
        // has more than one bit, then we cannot assume it is supposed to be a Boolean.
        if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {

            const bytes = field.buffer();
            // A Buffer in Node represents a collection of 8-bit unsigned integers.
            // Therefore, our single "bit field" comes back as the bits '0000 0001',
            // which is equivalent to the number 1.
            return( bytes[ 0 ] === 1 );
        }
        return( useDefaultTypeCasting() );
	} 
});

connection.connect(error => {
	if (error) throw error;
});

module.exports = connection;