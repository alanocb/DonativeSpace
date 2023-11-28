const express = require('express');
const router = express.Router();
const Campanha = require('../models/campanhasModel');

// Rota para pegar todas as campanhas
router.get('', async (req, res) => {
  try {
    const result = await Campanha.getCampanhas();
    res.status(result.status).json(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
});

// Rota para adicionar uma campanha
router.post('/', async (req, res) => {
  const { nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img } = req.body;
  try {
    const result = await Campanha.addCampanha(nome_evento, data_inicio, data_termino, campanha_observacao, admin_id, org_id, campanha_img);
    res.status(result.status).json(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
});



module.exports = router;
