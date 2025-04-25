const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

const noticiasRouter = require('./routes/noticias');
app.use('/api/noticias', noticiasRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});