import Veiculo from '../models/Veiculo.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    await Veiculo.create(req.body);
    res.status(201).end(); // HTTP 201: Created
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveAll = async function(req, res) {
  try {
    const veiculos = await Veiculo.find();
    res.send(veiculos); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveOne = async function(req, res) {
  try {
    const veiculo = await Veiculo.findById(req.params.id);
    if (!veiculo) return res.status(404).end(); // HTTP 404: Not Found
    res.send(veiculo); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.update = async function(req, res) {
  try {
    const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body);
    if (!veiculo) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.delete = async function(req, res) {
  try {
    const veiculo = await Veiculo.findByIdAndDelete(req.params.id);
    if (!veiculo) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

export default controller;
