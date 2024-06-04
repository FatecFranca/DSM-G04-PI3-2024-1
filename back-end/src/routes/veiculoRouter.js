// src/routes/veiculoRouter.js

import express from 'express';
import {
  createVeiculo,
  getVeiculos,
  getVeiculoById,
  updateVeiculo,
  deleteVeiculo
} from '../controllers/veiculoController.js';

const router = express.Router();

router.post('/', createVeiculo);
router.get('/', getVeiculos);
router.get('/:id', getVeiculoById);
router.put('/:id', updateVeiculo);
router.delete('/:id', deleteVeiculo);

export default router;
