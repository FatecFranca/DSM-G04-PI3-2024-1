import express from 'express';
import Veiculo from '../models/veiculoModel.js.js';

const router = express.Router();

// Rota para criar um novo veículo
router.post('/', async (req, res) => {
  try {
    const {
      marca,
      modelo,
      ano,
      placa,
      pbt,
      capacidadeCarga,
      tipoCarroceria,
    } = req.body;

    const novoVeiculo = new Veiculo({
      marca,
      modelo,
      ano,
      placa,
      pbt,
      capacidadeCarga,
      tipoCarroceria,
    });

    await novoVeiculo.save();
    res.status(201).json(novoVeiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para recuperar todos os veículos
router.get('/', async (req, res) => {
  try {
    const veiculos = await Veiculo.find();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para recuperar um veículo pelo ID
router.get('/:id', async (req, res) => {
  try {
    const veiculo = await Veiculo.findById(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um veículo pelo ID
router.put('/:id', async (req, res) => {
  try {
    const {
      marca,
      modelo,
      ano,
      placa,
      pbt,
      capacidadeCarga,
      tipoCarroceria,
    } = req.body;
    const veiculoAtualizado = {
      marca,
      modelo,
      ano,
      placa,
      pbt,
      capacidadeCarga,
      tipoCarroceria,
    };
    const veiculo = await Veiculo.findByIdAndUpdate(
      req.params.id,
      veiculoAtualizado,
      { new: true }
    );
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um veículo pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const veiculo = await Veiculo.findByIdAndDelete(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.status(200).json({ message: 'Veículo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
