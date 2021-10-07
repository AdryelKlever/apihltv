'use strict'

const mongoose = require('mongoose');
const Jogador = mongoose.model('Jogador');

exports.get = () => {
    return Jogador
        .find({}, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch');
}

exports.getById = (id) => {
    return Jogador
        .findById(id, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch');
}

exports.getByNomeTime = (TimeAtual) => {
    return Jogador.
    find({
        NomeTime: TimeAtual, },
        'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch'
    );
}

exports.create = (data) => {
    var jogador = new Jogador(data);
    return jogador.save();
}

exports.update = (id, data) => {
    return Jogador.findByIdAndUpdate(id, {
        $set: {
            NomeJogador: data.NomeJogador,
            TimeAtual: data.TimeAtual,
            VezesTop30: data.VezesTop30,
            Instagram: data.Instagram,
            Twitter: data.Twitter,
            Twitch: data.Twitch
        }
    });
}

exports.delete = (id) => {
    return  Jogador.findByIdAndDelete(id);
}