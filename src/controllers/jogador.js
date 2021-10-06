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
    Jogador.findByIdAndUpdate(req.params.id, {
        $set: {
            NomeJogador: req.body.NomeJogador,
            TimeAtual: req.body.TimeAtual,
            VezesTop30: req.body.VezesTop30,
            Instagram: req.body.Instagram,
            Twitter: req.body.Twitter,
            Twitch: req.body.Twitch
        }
    }).then(p => {
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
    Jogador.findByIdAndDelete(req.body.id)
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