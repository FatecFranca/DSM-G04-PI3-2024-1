import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import abastecimentosRouter from '../routes/abastecimentosRouter.js';
import signupRouter from '../routes/usuarioRouter.js'; // Importe a rota signupRouter aqui

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/abastecimento', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// // Use as rotas de abastecimento
app.use('/api/abastecimentos', abastecimentosRouter);

// // Use as rotas de signup
app.use('/api/signup', signupRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
