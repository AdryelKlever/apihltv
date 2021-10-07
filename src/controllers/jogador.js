'use strict'

const mongoose = require('mongoose');
const Jogador = mongoose.model('Jogador');
const ValidationContract = require('../validators/fluent_validators');
const repository = require('../repositories/jogador');

exports.get = (req, res, next) => {
    repository.get().then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    repository.getById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getByNomeTime = (req, res, next) => {
    repository.getByNomeTime(req.params.TimeAtual)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    repository.create(req.body).then(p => {
        res.status(201).send({ message: 'Jogador cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar o jogador', data: e });
    });
};

exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body).then(p => {
        res.status(201).send({
            message: "Jogador atualizado com sucesso!"
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao atualizar o jogador!",
            data: e
        });
    });
};

exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
    .then(p => {
        res.status(201).send({
            message: "Jogador excluido com sucesso!"
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao excluir o jogador!",
            data: e
        });
    });
};