'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    NomeJogador: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true
    },
    TimeAtual: {
        type: String,
        required:  [true, 'Informe o time atual'],
        trim: true
    },
    VezesTop30: {
        type: Number,
        required:  [true, 'Informe quantas vezes esse jogador esteve entre o Top30'],
    },
    Instagram: {
        type: String,
        trim: true
    },
    Twitter: {
        type: String,
        trim: true
    },
    Twitch: {
        type: String,
        trim: true
    },

});

module.exports = mongoose.model('Jogador', schema);