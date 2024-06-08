// src/bin/server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import abastecimentoRouter from '../routes/abastecimentoRouter.js';
import usuarioRouter from '../routes/usuarioRouter.js';
import veiculoRouter from '../routes/veiculoRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/abastecimento', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

mongoose.connect(
  'mongodb+srv://samilopesrosa:Sampeels@cluster0.so1bljm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>{
    console.log('Conectado com sucesso!!!');
  })
  .catch((err)=>{
    console.log(err);
  })

// Use as rotas de abastecimento
app.use('/api/abastecimentos', abastecimentoRouter);

// Use as rotas de usuários
app.use('/api/usuarios', usuarioRouter);

// Use as rotas de veículos
app.use('/api/veiculos', veiculoRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
