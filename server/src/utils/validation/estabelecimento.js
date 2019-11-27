const emailValidator = require('email-validator');

//  Backend API validation

const preSave = estabelecimento => {
    const { razao_social, nome_fantasia, cnpj, email, endereco, cidade, estado, telefone, data_cadastro, categoria, status, agencia, conta } = estabelecimento;
    let validation = {
        code: 200,
        error: []
    };

    // Razão Social
    if (!razao_social) {
        validation.code = 400;
        validation.error.push({ field: 'razao_social', message: 'Razão Social é obritatório' });
    } else {
        if (razao_social.length > 80)  {
            validation.code = 400;
            validation.error.push({ field: 'razao_social', message: 'Razão Social deve ter até 80 caracteres'});
        }
    }

    // CNPJ
    if (!cnpj) {
        validation.code = 400;
        validation.error.push({ field: 'cnpj', message: 'CNPJ é obritatório' });
    } else {
        if (cnpj.length > 14)  {
            validation.code = 400;
            validation.error.push({ field: 'cnpj', message: 'CNPJ deve ter até 14 caracteres' });
        }
    }

    // Nome Fantasia
    if (nome_fantasia && nome_fantasia.length > 60) {
        validation.code = 400;
        validation.error.push({ field: 'nome_fantasia', message: 'Nome fantasia deve ter até 60 caracteres' });
    }

    // e-mail
    if (email && email.length > 45) {
        validation.code = 400;
        validation.error.push({ field: 'email', message: 'e-mail deve ter até 45 caracteres' });

        if (!emailValidator.validate(email)) {
            validation.error.push({ field: 'email', message: 'O e-mail informado não é válido' });
        }
    }

    // Endereco
    if (endereco && endereco.length > 60) {
        validation.code = 400;
        validation.error.push({ field: 'endereco', message: 'Endereco deve ter até 60 caracteres' });
    }

    // Cidade
    if (cidade && cidade.length > 32) {
        validation.code = 400;
        validation.error.push({ field: 'cidade', message: 'Cidade deve ter até 32 caracteres' });
    }

    // Estado
    if (estado && estado.length > 2) {
        validation.code = 400;
        validation.error.push({ field: 'estado', message: 'Estado deve ter até 2 caracteres'});
    }

    // Telefone
    if (telefone && telefone.length > 11) {
        validation.code = 400;
        validation.error.push({ field: 'telefone', message: 'Telefone deve ter até 11 caracteres' });
    }

    // Agencia
    if (agencia && agencia.length > 4) {
        validation.code = 400;
        validation.error.push({ field: 'agencia', message: 'Agencia deve ter até 4 caracteres' });
    }

    // Conta
    if (conta && conta.length > 6) {
        validation.code = 400;
        validation.error.push({ field: 'conta', message: 'Conta deve ter até 6 caracteres' });
    }
    return validation;
}

const uniqueIndexFields = (sqlErrorMsg, estabelecimento) => {

    // UNIQUE Index throws at the first repeated field
    if (sqlErrorMsg.includes('razao_social_UNIQUE')) {

        return { field: 'razao_social', message: `Razão Social: ${estabelecimento.razao_social} já existe no banco de dados` }
    } 
    if (sqlErrorMsg.includes('cnpj_UNIQUE')) {

        return { field: 'cnpj', message: `CPNJ: ${estabelecimento.cnpj} já existe no banco de dados` }
    }
}

module.exports = {
    preSave,
    uniqueIndexFields
}