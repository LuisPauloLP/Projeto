const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Conexão MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bc', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado');
});

// Schema para agendamentos
const appointmentSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  organizer: String,
  participants: String,
  desc: String,
  color: String,
  status: { type: String, enum: ['cancelado', 'agendado', 'confirmado'], default: 'agendado' },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Buscar agendamentos por participante
router.get('/search', async (req, res) => {
  const nome = req.query.name;
  try {
    const appointments = await Appointment.find({ participants: { $regex: nome, $options: 'i' } });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar agendamentos.', error: err.message });
  }
});

// Listar todos os agendamentos
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar agendamentos.', error: err.message });
  }
});

// Criar um novo agendamento
router.post('/', async (req, res) => {
  const newAppointment = req.body;
  try {
    const createdAppointment = await Appointment.create(newAppointment);
    res.status(201).json({ message: 'Agendamento criado com sucesso!', createdAppointment });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar agendamento.', error: err.message });
  }
});

// Atualizar um agendamento
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedAppointment = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(id, updatedAppointment, { new: true });
    res.json({ message: 'Agendamento atualizado com sucesso!', appointment });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar agendamento.', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { participants, organizer } = req.body;

  try {
    const aluno = await User.findOne({ author_name: participants });
    const profissional = await User.findOne({ author_name: organizer });

    if (!aluno || !profissional) {
      return res.status(400).json({ message: 'Aluno ou profissional não cadastrado no sistema.' });
    }

    const newAppointment = await Appointment.create(req.body);
    res.status(201).json({ message: 'Agendamento criado com sucesso!', newAppointment });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar agendamento.', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Appointment.findByIdAndDelete(id);
    res.json({ message: 'Agendamento excluído com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao excluir agendamento.', error: err.message });
  }
});



module.exports = router;
