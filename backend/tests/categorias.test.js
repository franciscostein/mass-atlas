const connection = require('../src/utils/db/connection');

test('Buscar categorias', async () => {
    connection.query('SELECT * FROM categorias', (error, results) => {
        expect(error).toBeNull();
        expect(results.length).toBe(5);
    });
});