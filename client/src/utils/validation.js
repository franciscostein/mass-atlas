import emailValidator from 'email-validator';
import cnpjValidator from 'node-cnpj';
import moment from 'moment';

const validation = {

    preSave: estabelecimento => {
        const result = [];
        const { cnpj, email, telefone, cadastro, categoria, agencia, conta } = estabelecimento;

        if (!cnpjValidator.validate(cnpj)) {
            result.push({ field: 'cnpj', message: 'CNPJ inválido' });
        }

        if (email && !emailValidator.validate(email)) {
            result.push({ field: 'email', message: 'E-mail inválido' });
        }

        if (telefone && (telefone.length < 10 || telefone.length > 11)) {
            result.push({ field: 'telefone', message: 'Número incompleto' });
        }

        if (cadastro && !moment(cadastro).isValid()) {
            result.push({ field: 'cadastro', message: 'Data inválida' });
        }
        
        if (parseInt(categoria) === 1 && !telefone) {  // 1 - Supermercado = telefone obrigatório
            result.push({ field: 'telefone', message: 'Obrigatório para Supermercados' });
        }

        if (agencia && agencia.length !== 4) {
            result.push({ field: 'agencia', message: 'Deve conter 4 caracteres' });
        }
        if (conta && conta.length !== 6) {
            result.push({ field: 'conta', message: 'Deve conter 6 caracteres' });
        }
        return result;
    }
}

export default validation;