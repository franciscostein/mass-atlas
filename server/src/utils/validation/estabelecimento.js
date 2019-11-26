//  Backend API validation

const preSave = estabelecimento => {
    const { razao_social, nome_fantasia, cnpj, email, endereco, cidade, estado, telefone, data_cadastro, categoria, status, agencia, conta } = estabelecimento;
    let validation = {
        code: 200,
        fields: [],
        message: []
    };

    // Razão Social
    if (!razao_social) {
        validation.code = 400;
        validation.fields.push('razao_social');
        validation.message.push('Razão Social é obritatório');
    } else {
        if (razao_social.length > 80)  {
            validation.code = 400;
            validation.fields.push('razao_social');
            validation.message.push('Razão Social deve ter até 80 caracteres');
        }
    }

    // CNPJ
    if (!cnpj) {
        validation.code = 400;
        validation.fields.push('cnpj');
        validation.message.push('CNPJ é obritatório');
    } else {
        if (cnpj.length > 14)  {
            validation.code = 400;
            validation.fields.push('cnpj');
            validation.message.push('CNPJ deve ter até 14 caracteres');
        }
    }

    // Nome Fantasia
    if (nome_fantasia && nome_fantasia.length > 60) {
        validation.code = 400;
        validation.fields.push('nome_fantasia');
        validation.message.push('Nome fantasia deve ter até 60 caracteres');
    }

    // e-mail
    if (email && email.length > 45) {
        validation.code = 400;
        validation.fields.push('email');
        validation.message.push('e-mail deve ter até 45 caracteres');
    }

    // Endereco
    if (endereco && endereco.length > 60) {
        validation.code = 400;
        validation.fields.push('endereco');
        validation.message.push('Endereco deve ter até 60 caracteres');
    }

    // Cidade
    if (cidade && cidade.length > 32) {
        validation.code = 400;
        validation.fields.push('cidade');
        validation.message.push('Cidade deve ter até 32 caracteres');
    }

    // Estado
    if (estado && estado.length > 2) {
        validation.code = 400;
        validation.fields.push('estado');
        validation.message.push('Estado deve ter até 2 caracteres');
    }

    // Telefone
    if (telefone && telefone.length > 11) {
        validation.code = 400;
        validation.fields.push('telefone');
        validation.message.push('Telefone deve ter até 11 caracteres');
    }

    // Agencia
    if (agencia && agencia.length > 4) {
        validation.code = 400;
        validation.fields.push('agencia');
        validation.message.push('Agencia deve ter até 4 caracteres');
    }

    // Conta
    if (conta && conta.length > 6) {
        validation.code = 400;
        validation.fields.push('conta');
        validation.message.push('Conta deve ter até 6 caracteres');
    }

    return validation;
}

module.exports.preSave = preSave;