const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  const nome = req.query.name;
  try {
    const result = await req.pool.query('SELECT * FROM apae.students WHERE student_name ILIKE $1', [`%${nome}%`]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar estudantes.', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM apae.students');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('SELECT * FROM apae.students WHERE id = $1', [pid]);
    res.json({ message: 'Estudante encontrado com sucesso!', student: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar estudante.', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const student = req.body.student;
  try {
    const result = await req.pool.query(
      'INSERT INTO apae.students (student_name, student_surname, student_cpf, student_email, student_date_of_born, student_phone, student_cep, student_logradouro, student_bairro, student_city, student_UF, student_user, student_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
      [student.student_name, student.student_surname, student.student_cpf, student.student_email, student.student_date_of_born, student.student_phone, student.student_cep, student.student_logradouro, student.student_bairro, student.student_city, student.student_UF, student.student_user, student.student_status]
    );
    res.json({ message: 'Estudante salvo com sucesso!', newStudent: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:pid', async (req, res) => {
  const pid = req.params.pid;
  const student = req.body.student;
  try {
    const result = await req.pool.query(
      'UPDATE apae.students SET student_name = $1, student_surname = $2, student_cpf = $3, student_email = $4, student_date_of_born = $5, student_phone = $6, student_cep = $7, student_logradouro = $8, student_bairro = $9, student_city = $10, student_UF = $11, student_user = $12, student_status = $13 WHERE id = $14 RETURNING *',
      [student.student_name, student.student_surname, student.student_cpf, student.student_email, student.student_date_of_born, student.student_phone, student.student_cep, student.student_logradouro, student.student_bairro, student.student_city, student.student_UF, student.student_user, student.student_status, pid]
    );
    res.json({ message: 'Estudante alterado com sucesso!', updatedStudent: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('DELETE FROM apae.students WHERE id = $1 RETURNING *', [pid]);
    res.json({ message: 'Estudante deletado com sucesso!', deletedStudent: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;