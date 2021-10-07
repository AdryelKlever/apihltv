'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    NomeUsuario: {
        type: String,
        required: true,
        trim: true
    },
    EmailUsuario: {
        type: String,
        required: true,
        trim: true
    },
    SenhaUsuario: {
        type: String,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('Usuario', schema);