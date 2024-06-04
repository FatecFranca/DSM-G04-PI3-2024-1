// src/routes/abastecimentos.js
import express from 'express';
import Abastecimento from '../models/abastecimentosModel.js';

const router = express.Router();

// Rota para registrar um novo abastecimento
router.post('/', async (req, res) => {
  try {
    const { data, placa, odometro, litros, precoLitro, tipoCombustivel, posto } = req.body;
    const totalAbastecimento = litros * precoLitro;

    const novoAbastecimento = new Abastecimento({
      data,
      placa,
      odometro,
      litros,
      precoLitro,
      tipoCombustivel,
      posto,
      totalAbastecimento
    });

    await novoAbastecimento.save();
    res.status(201).json(novoAbastecimento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os abastecimentos
router.get('/', async (req, res) => {
  try {
    const abastecimentos = await Abastecimento.find();
    res.status(200).json(abastecimentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
