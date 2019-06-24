"use strict";

//Valida o que vem pelo request...
const ValitationContract = require("../validators/fluent-validator");
const repository = require("../repositories/product-repository");

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(201).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    let contract = new ValitationContract();

    contract.hasMinLen(
        req.body.title,
        3,
        "O título deve conter pelo menos 3 caracteres"
    );
    contract.hasMinLen(
        req.body.slug,
        3,
        "O slug deve conter pelo menos 3 caracteres"
    );
    contract.hasMinLen(
        req.body.description,
        3,
        "O título deve conter pelo menos 3 caracteres"
    );

    if (!contract.isValid()) {
        res.status(400)
            .send(contract.errors())
            .end();

        return;
    }
    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({
                message: "Produto cadastrado com sucesso!"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao cadastrar o produto",
                data: e
            });
        });
};

exports.put = ("/:id",
(req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(x => {
            res.status(201).send({
                message: "Produto atualizado com sucesso!"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao atualizar o produto!",
                data: e
            });
        });
});

exports.delete = ("/",
(req, res, next) => {
        repository.delete(req.body.id)
        .then(x => {
            res.status(201).send({
                message: "Produto removido com sucesso!"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao remover o produto!",
                data: e
            });
        });
});
