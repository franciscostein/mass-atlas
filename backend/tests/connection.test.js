const connection = require('../src/utils/db/connection');

test('Conexão com o banco de dados', async () => {
    connection.ping(error => {
        expect(error).toBeNull();
    });
});