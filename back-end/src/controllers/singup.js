import SingUp from '../models/SingUp.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    await SingUp.create(req.body);
    res.status(201).end(); // HTTP 201: Created
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveAll = async function(req, res) {
  try {
    const signUps = await SingUp.find();
    res.send(signUps); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.retrieveOne = async function(req, res) {
  try {
    const signUp = await SingUp.findOne({ _id: req.params.id });
    if (!signUp) return res.status(404).end(); // HTTP 404: Not Found
    res.send(signUp); // HTTP 200: OK (implicit)
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.update = async function(req, res) {
  try {
    const signUp = await SingUp.findByIdAndUpdate(req.params.id, req.body);
    if (!signUp) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

controller.delete = async function(req, res) {
  try {
    const signUp = await SingUp.findByIdAndDelete(req.params.id);
    if (!signUp) return res.status(404).end(); // HTTP 404: Not Found
    res.status(204).end(); // HTTP 204: No Content
  } catch(error) {
    console.error(error);
    res.status(500).end(); // HTTP 500: Internal Server Error
  }
};

export default controller;
