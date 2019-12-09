const sql = require('../utils/db/connection');

const findAll = callback => {
    sql.query('SELECT * FROM categorias', (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    findAll
};