import mongoose from 'mongoose';

const veiculoSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  placa: { type: String, required: true, unique: true },
  pbt: { type: Number, required: true },
  capacidadeCarga: { type: Number, required: true },
  tipoCarroceria: { type: String, required: true },
});

const Veiculo = mongoose.model('Veiculo', veiculoSchema);

export default Veiculo;
