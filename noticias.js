const express = require('express');
const router = express.Router();
const Noticia = require('../models/Noticia');

// Listar notícias
router.get('/', async (req, res) => {
  const noticias = await Noticia.find();
  res.json(noticias);
});

// Criar notícia
router.post('/', async (req, res) => {
  const noticia = new Noticia(req.body);
  await noticia.save();
  res.json({ mensagem: 'Notícia criada com sucesso!' });
});

module.exports = router;