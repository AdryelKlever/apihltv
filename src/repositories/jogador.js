'use strict'

const mongoose = require('mongoose');
const Jogador = mongoose.model('Jogador');

exports.get = async () => {
    const res = await Jogador
        .find({}, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch');
    return res;
}

exports.getById = async (id) => {
    const res = await Jogador
        .findById(id, 'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch');
    return res;
}

exports.getByNomeTime = async (TimeAtual) => {
    const res = await Jogador
    .find({
        NomeTime: TimeAtual, },
        'NomeJogador TimeAtual VezesTop30 Instagram Twitter Twitch'
    );
    return res;
}

exports.create = async (data) => {
    var jogador = new Jogador(data);
    await jogador.save();
}

exports.update = async (id, data) => {
    await Jogador.findByIdAndUpdate(id, {
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

exports.delete = async (id) => {
    await Jogador.findByIdAndDelete(id);
}