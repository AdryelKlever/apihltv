'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const repository = require('../repositories/usuario');
const md5 = require('md5');
const authService = require('../services/auth');

const emailService = require('../services/email');

exports.authenticate = async (req, res, next) => {
    try {
        const usuario = await repository.authenticate({
            EmailUsuario: req.body.EmailUsuario,
            SenhaUsuario: md5(req.body.SenhaUsuario + global.SALT_KEY)
        });

        if (!usuario) {
            res.status(404).send({
                message: 'Email ou senha inválidos!',
            });
            return;
        }

        const token = await authService.gerenateToken({ 
            EmailUsuario: usuario.EmailUsuario,
            NomeUsuario: usuario.NomeUsuario
        });

        res.status(201).send({ 
            token: token,
            EmailUsuario: usuario.EmailUsuario,
            NomeUsuario: usuario.NomeUsuario,
            message: 'Usuário autenticado com sucesso!' });

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};

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
        var data = await repository.getByNomeUsuario(req.params.NomeUsuario);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            NomeUsuario: req.body.NomeUsuario,
            EmailUsuario: req.body.EmailUsuario,
            SenhaUsuario: md5(req.body.SenhaUsuario + global.SALT_KEY)
        });
        //emailService.send(req.body.EmailUsuario, 'Bem Vindo ao HLTV', global.EMAIL_TMPL.replace('{0}', req.body.NomeUsuario));

        res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
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
            message: "Usuário excluido com sucesso!"
        });
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição ' + e
        });
    }
};