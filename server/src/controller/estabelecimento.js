const Estabelecimento = require('../model/estabelecimento');
const validation = require('../utils/validation/estabelecimento');

const insert = async (data, result) => {
    const { code, message, fields } = validation.preSave(data);

    if (code === 200) {
        const estabelecimento = new Estabelecimento(data);

        estabelecimento.create((error, insertedId) => {
            if (error) {
                if (error.errno === 1062) {
                    result(400, 'Registro já existe no banco de dados', null, null);
                } else {
                    result(500, 'Erro ao inserir registro', null, null);
                }
            } else {
                result(201, null, null, insertedId);
            }
        });
    } else {
        result(code, message, fields, null);
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

const getMany = async result => {
    // PAGINAÇÃO
    const estabelecimento = new Estabelecimento();

    estabelecimento.findAll((error, results) => {

        if (error) {
            result(500, 'Erro ao buscar registro', null);
        }
        if (results.length !== 0) {
            result(200, null, results);
        } else {
            result(204, null, null);
        }
    });
}

const update = async (_id, data, result) => {
    const { code, message, fields } = validation.preSave(data);

    if (code === 200) {
        const estabelecimento = new Estabelecimento(data);

        estabelecimento.update(_id, (error, res) => {
            if (error) {
                result(500, 'Erro ao atualizar registro', null, null);
            } else {
                console.log(res);
                result(200, null, null, res);
            }
        });
    } else {
        result(code, message, fields, null);
    }
}

const remove = async (_id, result) => {

}

module.exports = {
    insert,
    getOne,
    getMany,
    update,
    remove
}