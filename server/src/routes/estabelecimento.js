const controller = require('../controller/estabelecimento');
const router = require('express').Router();

// Create
router.post('/estabelecimentos', async (req, res) => {
    await controller.insert(req.body, (code, message, fields, insertedId) => {

        if (insertedId) {
            return res.status(code).send({ insertedId });
        }
        return res.status(code).send({ message, fields });
    });
});

// Read one
router.get('/estabelecimentos/:id', async (req, res) => {
    await controller.getOne(req.params.id, (code, message, estabelecimento) => {
        
        if (code === 200) {
            return res.status(code).send(estabelecimento);
        }
        return res.status(code).send({ message });
    });
});

// Read many
router.get('/estabelecimentos', async (req, res) => {
    // implemenar paginação
    await controller.getMany((code, message, estabelecimentos) => {

        if (code === 200) {
            return res.status(code).send(estabelecimentos);
        }
        return res.status(code).send({ message });
    });
});

// Update
router.patch('/estabelecimentos/:id', async (req, res) => {
    const _id = req.params.id;

    await controller.update(_id, req.body, (code, message, fields, response) => {

        if (code === 200) {
            return res.status(code).send(response);
        }
        return res.status(code).send({ message, fields });
    });
});

// Delete
router.delete('/estabelecimentos/:id', async (req, res) => {

});

module.exports = router;