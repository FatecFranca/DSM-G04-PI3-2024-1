// src/controllers/abastecimentoController.js

import Abastecimento from '../models/abastecimentoModel.js';

// Controller para listar todos os abastecimentos
export const getAbastecimentos = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    console.log('Received query parameters:', { startDate, endDate });

    let query = {};

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Ajustando para incluir o último segundo do dia final
    
      query = {
        data: {
          $gte: start.toISOString(), // Convertendo para formato UTC
          $lte: end.toISOString(),   // Convertendo para formato UTC
        },
      };
    }

    console.log('Query being used:', JSON.stringify(query));

    const abastecimentos = await Abastecimento.find(query);
    console.log('Found abastecimentos:', abastecimentos);

    res.status(200).json(abastecimentos);
  } catch (error) {
    console.error('Error fetching abastecimentos:', error);
    res.status(500).json({ error: error.message });
  }
};

// Controller para criar um novo abastecimento
export const createAbastecimento = async (req, res) => {
  try {
    const {
      data,
      placa,
      odometro,
      litros,
      precoLitro,
      tipoCombustivel,
      posto,
    } = req.body;

    const totalAbastecimento = parseFloat(litros) * parseFloat(precoLitro);

    const novoAbastecimento = new Abastecimento({
      data,
      placa,
      odometro,
      litros,
      precoLitro,
      tipoCombustivel,
      posto,
      totalAbastecimento,
    });

    await novoAbastecimento.save();
    res.status(201).json(novoAbastecimento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller para buscar um abastecimento pelo ID
export const getAbastecimentoById = async (req, res) => {
  try {
    const abastecimento = await Abastecimento.findById(req.params.id);
    if (!abastecimento) {
      return res.status(404).json({ message: 'Abastecimento não encontrado' });
    }
    res.status(200).json(abastecimento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller para atualizar um abastecimento pelo ID
export const updateAbastecimento = async (req, res) => {
  try {
    const {
      data,
      placa,
      odometro,
      litros,
      precoLitro,
      tipoCombustivel,
      posto,
    } = req.body;

    const totalAbastecimento = parseFloat(litros) * parseFloat(precoLitro);

    const abastecimentoAtualizado = {
      data,
      placa,
      odometro,
      litros,
      precoLitro,
      tipoCombustivel,
      posto,
      totalAbastecimento,
    };

    const abastecimento = await Abastecimento.findByIdAndUpdate(req.params.id, abastecimentoAtualizado, { new: true });
    if (!abastecimento) {
      return res.status(404).json({ message: 'Abastecimento não encontrado' });
    }
    res.status(200).json(abastecimento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller para deletar um abastecimento pelo ID
export const deleteAbastecimento = async (req, res) => {
  try {
    const abastecimento = await Abastecimento.findByIdAndDelete(req.params.id);
    if (!abastecimento) {
      return res.status(404).json({ message: 'Abastecimento não encontrado' });
    }
    res.status(200).json({ message: 'Abastecimento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
