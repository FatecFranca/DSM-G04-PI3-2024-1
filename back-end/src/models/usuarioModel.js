import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  tipoUsuario: { type: String, enum: ['Motorista', 'Prestador', 'Adm'], required: true },
  senha: { type: String, required: true }
});

const SignUp = mongoose.model('SignUp', signupSchema);

export default SignUp;
