// src/routes/abastecimentoRouter.js

import express from 'express';
import {
  createAbastecimento,
  getAbastecimentos,
  getAbastecimentoById,
  updateAbastecimento,
  deleteAbastecimento
} from '../controllers/abastecimentoController.js';

const router = express.Router();

router.post('/', createAbastecimento);
router.get('/', getAbastecimentos);
router.get('/:id', getAbastecimentoById);
router.put('/:id', updateAbastecimento);
router.delete('/:id', deleteAbastecimento);

export default router;
