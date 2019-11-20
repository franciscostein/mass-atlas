const express = require('express');
const Estabelecimento = require('../../model/estabelecimento');
const router = new express.Router();


//                  **** SEPARAR ROUTES DE CONTROLLER ****
//                  VALIDAÇÂO BACKEND ANTES DE ENVIAR PARA MODEL

// Create
router.post('/estabelecimento', async (req, res) => {
    const estabelecimento = new Estabelecimento(req.body);

    try {
        estabelecimento.create((error, insertedId) => {
            if (error) {
                throw new Error(error);
            } else {
                res.status(201).send({ insertedId });
            }
        });
    } catch(error) {
        res.status(400).send(error);
    }
});

module.exports = router;