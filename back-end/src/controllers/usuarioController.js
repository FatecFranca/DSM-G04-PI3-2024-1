// src/controllers/usuarioController.js

import Usuario from '../models/usuarioModel.js';

export const createUsuario = async (req, res) => {
  try {
    const { nomeCompleto, cpf, endereco, email, telefone, tipoUsuario, senha } = req.body;

    const novoUsuario = new Usuario({
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
};

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUsuario = async (req, res) => {
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
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, usuarioAtualizado, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
