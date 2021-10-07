'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// CONEXÃO COM O BANCO
mongoose.connect('mongodb+srv://hltv:hltv@cluster0.oucj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// CONEXÃO COM O BANCO

/* ==> MODELS <== */
const Jogador = require('./models/jogador');
const Usuario = require( './models/usuario');
const Noticia = require('./models/noticia');
/* ==> MODELS <== */

/* ==> CARREGAR ROTAS <== */
const indexRoute = require('./routes/index');
const userRoute = require('./routes/usuario');
const jogadorRoute = require('./routes/jogador');
const noticiaRoute = require('./routes/noticia');
/* ==> CARREGAR ROTAS <== */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/usuario', userRoute);
app.use('/jogador', jogadorRoute);
app.use('/noticia', noticiaRoute);

module.exports = app;