const Estabelecimento = require('../model/estabelecimento');
const validation = require('../utils/validation/estabelecimento');

const insert = async (data, result) => {
    const { code, error } = validation.preSave(data);

    if (code === 200) {
        const estabelecimento = new Estabelecimento(data);

        estabelecimento.create((err, insertedId) => {
            if (err) {
                if (err.errno === 1062) {
                    const uniqueValidationRes = validation.uniqueIndexFields(err.sqlMessage, estabelecimento);

                    result(400, uniqueValidationRes, null);
                } else {
                    result(500, err, null);
                }
            } else {
                result(201, null, insertedId);
            }
        });
    } else {
        result(code, error, null);
    }
}

const getOne = async (_id, result) => {
    const estabelecimento = new Estabelecimento();

    estabelecimento.findById(_id, (error, res) => {

        if (error) {
            result(500, 'Erro ao buscar registro', null);
        } 
        if (res) {
            result(200, null, res);
        } else {
            result(204, null, null);
        }
    });
}

const getMany = async (query, result) => {
    const estabelecimento = new Estabelecimento();

    if (query) {
        estabelecimento.search(query, (error, results) => {

            if (error) {
                result(500, 'Erro ao pesquisar registros', null);
            }
            if (results.length !== 0) {
                result(200, null, results);
            } else {
                result(204, null, null);
            }
        });
    } else {
        estabelecimento.findAll((error, results) => {

            if (error) {
                result(500, 'Erro ao buscar registros', null);
            }
            if (results.length !== 0) {
                result(200, null, results);
            } else {
                result(204, null, null);
            }
        });
    }
}

const update = async (_id, data, result) => {
    const { code, error } = validation.preSave(data);

    if (code === 200) {
        const estabelecimento = new Estabelecimento(data);

        estabelecimento.update(_id, (err, res) => {
            if (err) {
                if (err.errno === 1062) {
                    const uniqueValidationRes = validation.uniqueIndexFields(err.sqlMessage, estabelecimento);

                    result(400, uniqueValidationRes, null);
                } else {
                    result(500, 'Erro ao atualizar registro', null);
                }
            } else {
                result(200, null, estabelecimento);
            }
        });
    } else {
        result(code, error, null);
    }
}

const remove = async (_id, result) => {
    const estabelecimento = new Estabelecimento();

    estabelecimento.delete(_id, (err, res) => {
        if (err) {
            result(500, 'Erro ao remover registro', null);
        } else {
            result(200, null, res);
        }
    });
}

module.exports = {
    insert,
    getOne,
    getMany,
    update,
    remove
}