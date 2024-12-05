const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  const nome = req.query.name;
  try {
    const result = await req.pool.query('SELECT * FROM apae.appointments WHERE participants ILIKE $1', [`%${nome}%`]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar agendamentos.', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM apae.appointments');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('SELECT * FROM apae.appointments WHERE id = $1', [pid]);
    res.json({ message: 'Agendamento encontrado com sucesso!', appointment: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar agendamento.', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const appointment = req.body;
  try {
    const result = await req.pool.query(
      'INSERT INTO apae.appointments (title, start, fim, organizer, participants, descricao, color, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [appointment.title, appointment.start, appointment.fim, appointment.organizer, appointment.participants, appointment.descricao, appointment.color, appointment.status]
    );
    res.json({ message: 'Agendamento criado com sucesso!', newAppointment: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:pid', async (req, res) => {
  const pid = req.params.pid;
  const appointment = req.body;
  try {
    const result = await req.pool.query(
      'UPDATE apae.appointments SET title = $1, start = $2, fim = $3, organizer = $4, participants = $5, descricao = $6, color = $7, status = $8 WHERE id = $9 RETURNING *',
      [appointment.title, appointment.start, appointment.fim, appointment.organizer, appointment.participants, appointment.descricao, appointment.color, appointment.status, pid]
    );
    res.json({ message: 'Agendamento alterado com sucesso!', updatedAppointment: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('DELETE FROM apae.appointments WHERE id = $1 RETURNING *', [pid]);
    res.json({ message: 'Agendamento deletado com sucesso!', deletedAppointment: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;