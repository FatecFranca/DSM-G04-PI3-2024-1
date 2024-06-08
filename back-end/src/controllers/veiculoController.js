// src/controllers/veiculoController.js

import Veiculo from '../models/veiculoModel.js';

export const createVeiculo = async (req, res) => {
  try {
    const { marca, modelo, ano, placa, cor, tipoCarroceria, pbt, capacidadeCarga} = req.body;

    const novoVeiculo = new Veiculo({
      marca,
      modelo,
      ano,
      placa,
      cor,
      tipoCarroceria,
      pbt,
      capacidadeCarga
    });

    await novoVeiculo.save();
    res.status(201).json(novoVeiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.find();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVeiculoById = async (req, res) => {
  try {
    const veiculo = await Veiculo.findById(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVeiculo = async (req, res) => {
  try {
    const { marca, modelo, ano, placa, cor, tipo } = req.body;
    const veiculoAtualizado = {
      marca,
      modelo,
      ano,
      placa,
      cor,
      tipoCarroceria,
      pbt,
      capacidadeCarga
    };
    const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, veiculoAtualizado, { new: true });
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByIdAndDelete(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json({ message: 'Veículo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

