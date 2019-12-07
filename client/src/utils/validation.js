import emailValidator from 'email-validator';
import cnpjValidator from 'node-cnpj';
import dateValidator from 'moment';

const validation = {

    preSave: estabelecimento => {
        const { razaoSocial, fantasia, cnpj, email, endereco, cidade, estado, telefone, cadastro, categoria, status, agencia, conta } = estabelecimento;

        if (cnpj.length !== 14) {

        }
        if (!cnpjValidator.validate(cnpj)) {

        }

        if (!emailValidator.validate(email)) {

        }

        if (telefone.length < 10 || telefone.length > 11) {

        }

        if (!dateValidator.isValid(cadastro)) {

        }

        if (categoria === 1) {  // 1 - Supermercado = telefone obrigatório

        }

        if (agencia.length !== 4) {

        }
        if (conta.length !== 6) {

        }
    }
}

export default validation;