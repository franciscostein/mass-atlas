const request = require('supertest');
const app = require('../src/app');
const Estabelecimento = require('../src/model/estabelecimento');

beforeAll(() => new Estabelecimento().deleteAll());

let insertedId = 0;

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

    insertedId = response.body.insertedId;
    console.log(insertedId);
});

test('Não inserir registro duplicado', async () => {
    await request(app)
        .post('/estabelecimento')
        .send({
            razao_social: 'Ryan e Isis Assessoria Jurídica Ltda',
            cnpj: '52998350000192',
        })
        .expect(400);
});

test('Não inserir com valores inválidos', async () => {
    await request(app)
        .post('/estabelecimento')
        .send({
            razao_social: 'Ryan e Isis Assessoria Jurídica Ltda',
            cnpj: '52998350000192874543',
        })
        .expect(400);
});

test('Buscar estabelecimento por ID', async () => {
    const response = await request(app).get(`/estabelecimento/${insertedId}`).expect(200);

    expect(response.id).not.toBeNull();
    expect(response.razao_social).toBe('Ryan e Isis Assessoria Jurídica Ltda');
    expect(response.nome_fantasia).toBe('Ryan e Isis');
    expect(response.cnpj).toBe('52998350000192');
    expect(response.email).toBe('atendimento@ryaneisis.com.br');
    expect(response.endereco).toBe('Rua Teotônio Vilela, 836, Jardim Itamaracá');
    expect(response.cidade).toBe('Indaiatuba');
    expect(response.estado).toBe('SP');
    expect(response.telefone).toBe('1927130639');
    expect(response.data_cadastro).toBe(new Date('09/25/2011'));
    expect(response.categoria).toBe(2);
    expect(response.status).toBe(true);
    expect(response.agencia).toBe('2964');
    expect(response.conta).toBe('574684');
});

test('Inserir estabelecimento apenas com campos obrigatórios', async () => {

});

test('Buscar todos os registros', async () => {

});

test('Atualizar registro', async () => {

});

test('Não atualizar registro com valores inválidos', async () => {
    
});

test('Excluír registro', async () => {

});