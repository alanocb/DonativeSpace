const express = require('express');
const router = express.Router();
const DonativoFisico = require("../models/donativofisicoModel");
const auth = require("../middleware/auth");


router.get('', async (req,res) => {
  try {
    const result = await DonativoFisico.getDonativosFisicos();
    res.status(result.status).json(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
});






// Rota para obter a lista de donativos físicos com auth

/*
router.get('/', auth.verifyAuth, async function (req, res, next) {
  try {
    console.log("Get list of donativos fisicos");
    const result = await DonativoFisico.getDonativosFisicos();
    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});*/


// Rota para adicionar uma campanha
router.post('/', async (req, res) => {
  const {donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item } = req.body;
  try {
    const result = await DonativoFisico.addDonativoFisico(donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, telefone, email, endereco, item);
    res.status(result.status).json(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
});

module.exports = router;
