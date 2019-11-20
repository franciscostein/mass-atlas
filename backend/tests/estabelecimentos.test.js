const request = require('supertest');
const app = require('../src/app');
const Estabelecimento = require('../src/model/estabelecimento');

beforeAll(() => new Estabelecimento().deleteAll());

test('Criar estabelecimento', async () => {
    const response = await request(app)
        .post('/estabelecimento')
        .send({
            razao_social: 'Ryan e Isis Assessoria Jurídica Ltda',
            nome_fantasia: 'Ryan e Isis',
            cnpj: '52998350000192',
            email: 'atendimento@ryaneisis.com.br',
            endereco: 'Rua Teotônio Vilela, 836, Jardim Itamaracá',
            cidade: 'Indaiatuba',
            estado: 'SP',
            telefone: '1927130639',
            data_cadastro: '09/25/2011',
            categoria: 2,
            status: true,
            agencia: '2964',
            conta: '574684'
        })
        .expect(201);

    new Estabelecimento().findById(response.body.insertedId, (error, res) => {
        expect(error).toBeNull();
        expect(res.cnpj).toBe('52998350000192');
        expect(res.categoria).toBe(2);
    });
});

test('Não inserir registro duplicado', async () => {

});

test('Não inserir valores inválidos', async () => {

});