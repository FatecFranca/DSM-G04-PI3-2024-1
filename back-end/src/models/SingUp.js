import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    nomeCompleto: { type: String, required: true },
    cpf: { type: String, required: true, unique: true }, // Considerando que o CPF seja único
    endereco: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['Motorista', 'Prestador', 'Adm'], required: true },
    senha: { type: String, required: true }
});

export default mongoose.model('SingUp', esquema, 'singup')