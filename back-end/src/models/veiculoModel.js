// src/models/veiculoModel.js

import mongoose from 'mongoose';

const veiculoSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  placa: { type: String, required: true, unique: true },
  cor: { type: String, required: true },
  tipo: { type: String, required: true }
}, {
  timestamps: true
});

const Veiculo = mongoose.model('Veiculo', veiculoSchema);

export default Veiculo;
