'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/jogador');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/nomeTime/:NomeTime', controller.getByNomeTime);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;