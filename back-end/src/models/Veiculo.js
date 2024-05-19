import mongoose from 'mongoose'


// Definindo o esquema do modelo de veículo
const esquema = mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    ano: { type: Number, required: true },
    placa: { type: String, required: true },
    PBT: { type: Number, required: true }, // Peso Bruto Total
    capacidadeCarga: { type: Number, required: true },
    tipoCarroceria: { type: String, required: true }
});

export default mongoose.model('Veiculo', esquema, 'veiculo')