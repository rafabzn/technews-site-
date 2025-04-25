const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  data: String,
  conteudo: String,
});

module.exports = mongoose.model('Noticia', NoticiaSchema);