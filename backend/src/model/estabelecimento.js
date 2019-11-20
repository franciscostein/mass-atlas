const sql = require('../utils/db/connection');

class Estabelecimento {

    constructor(estabelecimento) {
        if (estabelecimento !== undefined) {
            const { razao_social, nome_fantasia, cnpj, email, endereco, cidade, estado, telefone, data_cadastro, categoria, status, agencia, conta } = estabelecimento;
    
            this.razao_social = razao_social;
            this.nome_fantasia = nome_fantasia;
            this.cnpj = cnpj;
            this.email = email;
            this.endereco = endereco;
            this.cidade = cidade;
            this.estado = estado;
            this.telefone = telefone;
            this.data_cadastro = new Date(data_cadastro);
            this.categoria = categoria;
            this.status = status;
            this.agencia = agencia;
            this.conta = conta;
        }
    }

    create(callback) {
        sql.query('INSERT INTO estabelecimentos SET ?', this, (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res.insertId);
            }
        });
    }

    findById(_id, callback) {
        sql.query('SELECT * FROM estabelecimentos WHERE ID = ?', _id, (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res[0]);
            }
        });
    }

    // test only
    deleteAll() {
        sql.query('DELETE FROM estabelecimentos', err => {
            if (err) throw err;
        });
    }
}

module.exports = Estabelecimento;