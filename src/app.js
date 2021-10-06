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
/* ==> MODELS <== */

/* ==> CARREGAR ROTAS <== */
const indexRoute = require('./routes/index');
const userRoute = require('./routes/usuario');
const jogadorRoute = require('./routes/jogador');
/* ==> CARREGAR ROTAS <== */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/usuario', userRoute);
app.use('/jogador', jogadorRoute);

module.exports = app;