'use strict'

const mongoose = require('mongoose');
const Jogador = mongoose.model('Jogador');

exports.get = (req, res, next) => {
    Jogador.
    find({}, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Jogador.
    findById(req.params.id, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getByNomeTime = (req, res, next) => {
    Jogador.

    find({
        NomeTime: req.params.id, },
        'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch'
    )
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    var jogador = new Jogador(req.body);
    jogador.save().then(p => {
        res.status(201).send({ message: 'Jogador cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar o jogador', data: e });
    });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        usuario: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};