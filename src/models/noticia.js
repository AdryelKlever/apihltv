'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    TituloNoticia: {
        type: String,
        required: [true, 'Informe um título'],
        trim: true
    },
    TituloAuxiliar: {
        type: String,
        trim: true
    },
    Lide: {
        type: Number,
        
    },
    CorpoNoticia: {
        type: String,
        required: [true, 'Informe o corpo da notícia'],
        trim: true
    }
});

module.exports = mongoose.model('Noticia', schema);