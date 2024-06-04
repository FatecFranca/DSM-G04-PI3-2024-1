// src/models/Abastecimento.js
import mongoose from 'mongoose';

const abastecimentoSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true
  },
  placa: {
    type: String,
    required: true
  },
  odometro: {
    type: Number,
    required: true
  },
  litros: {
    type: Number,
    required: true
  },
  precoLitro: {
    type: Number,
    required: true
  },
  tipoCombustivel: {
    type: String,
    enum: ['Diesel', 'Etanol', 'Gasolina'],
    required: true
  },
  posto: {
    type: String,
    required: true
  },
  totalAbastecimento: {
    type: Number,
    required: true
  }
});

const Abastecimento = mongoose.model('Abastecimento', abastecimentoSchema);

export default Abastecimento;
