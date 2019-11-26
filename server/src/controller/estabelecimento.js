const Estabelecimento = require('../model/estabelecimento');
const validation = require('../utils/validation/estabelecimento');

const insert = async (data, result) => {
    const { code, message, fields } = validation.preSave(data);

    if (code === 200) {
        const estabelecimento = new Estabelecimento(data);

        estabelecimento.create((error, insertedId) => {
            if (error) {
                if (error.errno === 1062) {

                    // Validação de campos repetidos, separar metodo
                    throw new Error();

                    result(400, 'Razão Social ou CNPJ já existem no banco de dados', ['razao_social', 'cnpj'], null);
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
                if (error.errno === 1062) {
                    let repeatedField = '';
                    let msg = '';

                    // UNIQUE Index throws at the first repeated field
                    if (error.sqlMessage.includes('razao_social_UNIQUE')) {
                        repeatedField = 'razao_social';  
                        msg = `Razão Social: ${estabelecimento.razao_social} já existe no banco de dados`;
                    } 
                    if (error.sqlMessage.includes('cnpj_UNIQUE')) {
                        repeatedField = 'cnpj';
                        msg = `CPNJ: ${estabelecimento.cnpj} já existe no banco de dados`;
                    } 
                    result(400, msg, repeatedField, null);

                } else {
                    result(500, 'Erro ao atualizar registro', null, null);
                }
            } else {
                result(200, null, null, estabelecimento);
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