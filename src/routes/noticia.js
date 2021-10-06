'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/noticia');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/tituloNoticia/:TituloNoticia', controller.getByTituloNoticia);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;