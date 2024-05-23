import mongoose from 'mongoose'

// Definindo o esquema do modelo de abastecimento
const esquema = mongoose.Schema({

    data: { type: Date, required: true },
    placaCaminhao: { type: String, required: true },
    odometro: { type: Number, required: true },
    litros: { type: Number, required: true },
    precoPorLitro: { type: Number, required: true },
    tipoCombustivel: { type: String, enum: ['Diesel', 'Etanol', 'Gasolina'], required: true },
    posto: { type: String, required: true },
    totalAbastecimento: { type: Number, required: true }
})


export default mongoose.mode('Abastecimeno', esquema, 'abastecimento')