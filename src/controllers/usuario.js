'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const repository = require('../repositories/usuario');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falaha ao processar a requisição ' + e
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falaha ao processar a requisição ' + e
        });
    }
};

exports.getByNomeUsuario = async (req, res, next) => {
    try {
        var data = await repository.getByNomeUsuario(req.params.NomeUsario);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body).then(p => {
            res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body).then(p => {
            res.status(201).send({  message: "Usuário atualizado com sucesso!"  });
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        repository.delete(req.body.id)
    .then(p => {
        res.status(201).send({
            message: "Usuáio excluido com sucesso!"
        });
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};