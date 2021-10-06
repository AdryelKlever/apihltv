'use strict'

const mongoose = require('mongoose');
const Noticia = mongoose.model('Noticia');

exports.get = (req, res, next) => {
    Noticia.
    find({}, 'TituloNoticia TituloAuxiliar Lide CorpoNoticia')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Noticia.
    findById(req.params.id, 'TituloNoticia TituloAuxiliar Lide CorpoNoticia')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getByTituloNoticia = (req, res, next) => {
    Noticia.
    find({
        TituloNoticia: req.params.TituloNoticia, 
    }, 'TituloNoticia TituloAuxiliar Lide CorpoNoticia'
    )
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    var noticia = new Noticia(req.body);
    noticia.save().then(p => {
        res.status(201).send({ message: 'Noticia cadastrada com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar a noticia', data: e });
    });
};

exports.put = (req, res, next) => {
    Noticia.findByIdAndUpdate(req.params.id, {
        $set: {
            TituloNoticia: req.body.TituloNoticia,
            TituloAuxiliar: req.body.TituloAuxiliar,
            Lide: req.body.Lide,
            CorpoNoticia: req.body.CorpoNoticia
        }
    }).then(p => {
        res.status(201).send({
            message: "Noticia atualizado com sucesso!"
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao atualizar a noticia !",
            data: e
        });
    });
};

exports.delete = (req, res, next) => {
    Noticia.findByIdAndDelete(req.body.id)
    .then(p => {
        res.status(201).send({
            message: "Noticia excluida com sucesso!"
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao deletar a noticia !",
            data: e
        });
    });
};