const sql = require('../utils/db/connection');
const environment = process.env.ENVIRONMENT;

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
            this.status = status || 0;
            this.agencia = agencia;
            this.conta = conta;
        }
    }

    create(callback) {
        sql.query('INSERT INTO estabelecimentos SET ?', this, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.insertId);
            }
        });
    }

    findById(_id, callback) {
        sql.query('SELECT * FROM estabelecimentos e WHERE e.id = ?', _id, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result[0]);
            }
        });
    }

    findAll(callback) { // Implementar paginação
        sql.query('SELECT * FROM estabelecimentos', (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }

    update(_id, callback) {
        sql.query('UPDATE estabelecimentos e SET ? WHERE e.id = ?', [this, _id], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    delete(_id, callback) {
        sql.query('DELETE FROM estabelecimentos e WHERE e.id = ?', _id, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result[0]);
            }
        });
    }

    // test env only
    deleteAll() {
        if (environment === 'test') {
            sql.query('DELETE FROM estabelecimentos', err => {
                if (err) throw err;
            });
        }
    }
}

module.exports = Estabelecimento;