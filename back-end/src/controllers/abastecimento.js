import Abastecimento from '../models/Abastecimento.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    await Abastecimento.create(req.body);
    res.status(201).end(); // HTTP 201: Created
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveAll = async function(req, res) {
  try {
    const abastecimentos = await Abastecimento.find();
    res.send(abastecimentos); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveOne = async function(req, res) {
  try {
    const abastecimento = await Abastecimento.findById(req.params.id);
    if (!abastecimento) return res.status(404).end(); // HTTP 404: Not Found
    res.send(abastecimento); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.update = async function(req, res) {
  try {
    const abastecimento = await Abastecimento.findByIdAndUpdate(req.params.id, req.body);
    if (!abastecimento) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.delete = async function(req, res) {
  try {
    const abastecimento = await Abastecimento.findByIdAndDelete(req.params.id);
    if (!abastecimento) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

export default controller;
