const controller = require('../controller/estabelecimento');
const router = require('express').Router();

// Create
router.post('/estabelecimento', async (req, res) => {
    await controller.insert(req.body, (code, message, fields, insertedId) => {

        if (insertedId) {
            return res.status(code).send({ insertedId });
        }
        return res.status(code).send({ message, fields });
    });
});

// Read one
router.get('/estabelecimento/:id', async (req, res) => {

});

// Read many
router.get('/estabelecimentos', async (req, res) => {
    // implemenar paginação
});

// Update
router.patch('/estabelecimento/:id', async (req, res) => {

});

// Delete
router.delete('/estabelecimento/:id', async (req, res) => {

});

module.exports = router;