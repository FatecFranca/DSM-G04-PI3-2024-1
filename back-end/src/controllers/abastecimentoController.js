// src/controllers/abastecimentoController.js

import Abastecimento from '../models/abastecimentoModel.js';

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
  
// Controller para listar todos os abastecimentos
  export const getAbastecimentos = async (req, res) => {
    try {
      const abastecimentos = await Abastecimento.find();
      res.status(200).json(abastecimentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
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