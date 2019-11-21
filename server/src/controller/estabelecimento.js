const Estabelecimento = require('../model/estabelecimento');
const validation = require('../utils/validation/estabelecimento');

const insert = async (data, result) => {
    const { code, message, fields } = validation.preInsert(data);

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

}

const getMany = async result => {
    // PAGINAÇÃO
}

const update = async (data, result) => {

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