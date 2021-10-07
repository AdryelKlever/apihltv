'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario');

router.post('/authenticate', controller.authenticate);
router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/nomeUsuario/:NomeUsuario', controller.getByNomeUsuario);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;