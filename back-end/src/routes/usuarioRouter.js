import express from 'express';
import SignUp from '../models/usuarioModel.js';

const router = express.Router();

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const {
      nomeCompleto,
      cpf,
      endereco,
      email,
      telefone,
      tipoUsuario,
      senha
    } = req.body;

    const novoUsuario = new SignUp({
      nomeCompleto,
      cpf,
      endereco,
      email,
      telefone,
      tipoUsuario,
      senha
    });

    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para recuperar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await SignUp.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para recuperar um usuário pelo ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await SignUp.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um usuário pelo ID
router.put('/:id', async (req, res) => {
  try {
    const { nomeCompleto, cpf, endereco, email, telefone, tipoUsuario, senha } = req.body;
    const usuarioAtualizado = {
      nomeCompleto,
      cpf,
      endereco,
      email,
      telefone,
      tipoUsuario,
      senha
    };
    const usuario = await SignUp.findByIdAndUpdate(req.params.id, usuarioAtualizado, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um usuário pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await SignUp.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
