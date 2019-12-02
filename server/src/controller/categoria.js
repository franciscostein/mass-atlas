const categoria = require('../model/categoria');

const getAll = async result => {
    categoria.findAll((error, results) => {

        if (error) {
            result(500, 'Erro ao buscar categorias', null);
        }
        if (results.length !== 0) {
            result(200, null, results);
        } else {
            result(204, null, null);
        }
    });
}

module.exports = {
    getAll
};