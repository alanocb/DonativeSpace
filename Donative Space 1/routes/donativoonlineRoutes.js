const express = require('express');
const router = express.Router();
const DonativoOnline = require("../models/donativoonlineModel");
const auth = require("../middleware/auth");


router.get('', async (req,res) => {
  try {
    const result = await DonativoOnline.getDonativosFisicos();
    res.status(result.status).json(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
});

/*
// Rota para obter a lista de donativos online
router.get('/', auth.verifyAuth, async function (req, res, next) {
  try {
    console.log("Get list of donativos online");
    const result = await DonativoOnline.getDonativosOnline();
    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});*/

// Rota para adicionar um novo donativo online
router.post('/', auth.verifyAuth, async function (req, res, next) {
  try {
    console.log("Add new donativo online");
    const {
      donativoonline_id,
      cartao,
      cod_cartao,
      valor,
      doador_id,
      org_id,
      subcategoria_id,
      titular,
      data_validade,
      data_exp,
      telefone,
      email
    } = req.body;

    const result = await DonativoOnline.addDonativoOnline(
      donativoonline_id,
      cartao,
      cod_cartao,
      valor,
      doador_id,
      org_id,
      subcategoria_id,
      titular,
      data_validade,
      data_exp,
      telefone,
      email
    );

    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});


module.exports = router;
