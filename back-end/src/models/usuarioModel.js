import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  tipoUsuario: { type: String, enum: ['Motorista', 'Prestador', 'Adm'], required: true },
  senha: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
