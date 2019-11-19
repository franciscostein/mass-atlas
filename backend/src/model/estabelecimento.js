const sql = require('../utils/db/connection');

const Estabelecimento = values => {
    const { id, razao_social, nome_fantasia, cnpj, email, telefone, endereco, categoria, status, agencia, conta } = values;

    this._id = id;
    this.razao_social = razao_social;
    this.nome_fantasia = nome_fantasia;
    this.cnpj = cnpj;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.data_cadastro = new Date();
    this.categoria = categoria;
    this.status = status;
    this.agencia = agencia;
    this.conta = conta;   
}

Estabelecimento.create = (novoEstabelecimento, result) => {
    sql.query('INSERT INTO estabelecimentos SET ?', novoEstabelecimento, (error, res) => {

        if (error) {
            console.log('error: ', error);
            result(error, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

module.exports = Estabelecimento;