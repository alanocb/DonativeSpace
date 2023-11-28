const express = require('express');
const router = express.Router();
const Organizacao = require('../models/organizacaoModel');

// Rota para obter todas as organizações
router.get('/', async function(req, res, next) {
  try {
    let result = await Organizacao.getOrganizacoes();
    if (result.status != 200) res.status(result.status).send(result.result);
    else {
      res.status(200).send(result.result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Rota para adicionar uma nova organização
router.post('/', async function(req, res, next) {
  try {
    let result = await Organizacao.addOrganizacao(
      req.body.org_name,
      req.body.usr_id,
      req.body.geom,
      req.body.org_endereco,
      req.body.org_telefone,
      req.body.org_img
    );
    if (result.status != 200) res.status(result.status).send(result.result);
    else {
      res.status(200).send(result.result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
