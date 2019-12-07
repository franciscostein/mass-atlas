import emailValidator from 'email-validator';
import cnpjValidator from 'node-cnpj';
import dateValidator from 'moment';

const validation = {

    preSave: estabelecimento => {
        const { cnpj, email, telefone, cadastro, categoria, agencia, conta } = estabelecimento;

        if (cnpj.length !== 14) {
            return { field: 'cnpj', message: 'Deve conter 14 caracteres' }
        }
        if (!cnpjValidator.validate(cnpj)) {
            return { field: 'cnpj', message: 'Inválido' }
        }

        if (!emailValidator.validate(email)) {
            return { field: 'email', message: 'Inválido' }
        }

        if (telefone.length < 10 || telefone.length > 11) {
            return { field: 'telefone', message: 'Somente 10 ou 11 caracteres' }
        }

        if (!dateValidator.isValid(cadastro)) {
            return { field: 'cadastro', message: 'Inválido' }
        }

        if (categoria === 1 && (telefone.length < 10 || telefone.length > 11)) {  // 1 - Supermercado = telefone obrigatório
            return { field: 'telefone', message: 'Obrigatório para Supermercados' }
        }

        if (agencia.length !== 4) {
            return { field: 'agencia', message: 'Deve conter 4 caracteres' }
        }
        if (conta.length !== 6) {
            return { field: 'conta', message: 'Deve conter 6 caracteres' }
        }
        return null;
    }
}

export default validation;