'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sche,a = new Schema({
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
    IdadeUsuario: {
        type: Number,
        required: true,
    },
    SenhaUsuario: {
        type: String,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('Usuario', this.schema);