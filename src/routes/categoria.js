const controller = require('../controller/categoria');
const router = require('express').Router();

// Read many
router.get('/categorias', async (req, res) => {
    await controller.getAll((code, message, categorias) => {

        if (code === 200) {
            return res.status(code).send(categorias);
        }
        return res.status(code).send({ message });
    });
});

module.exports = router;