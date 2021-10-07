'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.authenticate = async (data) => {
    const res = await Usuario.findOne({
        EmailUsuario: data.EmailUsuario,
        SenhaUsuario: data.SenhaUsuario
    });
    return res;
}

exports.get = async () => {
    const res = await Usuario
        .find({}, 'NomeUsuario EmailUsuario');
    return res;
}

exports.getById = async (id) => {
    const res = await Usuario
        .findById(id, 'NomeUsuario EmailUsuario');
    return res;
}

exports.getByNomeUsuario = async (NomeUsuario) => {
    const res = await Usuario
    .find({
        NomeUsuario: NomeUsuario, },
        'NomeUsuario EmailUsuario'
    );
    return res;
}

exports.create = async (data) => {
    var usuario = new Usuario(data);
    await usuario.save();
}

exports.update = async (id, data) => {
    await Usuario.findByIdAndUpdate(id, {
        $set: {
            NomeUsuario: data.NomeUsuario,
            EmailUsuario: data.EmailUsuario,
            SenhaUsuario: data.SenhaUsuario
        }
    });
}

exports.delete = async (id) => {
    await Usuario.findByIdAndDelete(id);
}