const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  const nome = req.query.name;
  try {
    const result = await req.pool.query('SELECT * FROM apae.professionals WHERE professional_name ILIKE $1', [`%${nome}%`]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar profissionais.', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM apae.professionals');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('SELECT * FROM apae.professionals WHERE id = $1', [pid]);
    res.json({ message: 'Profissional encontrado com sucesso!', professional: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar profissional.', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const professional = req.body.professional;
  try {
    const result = await req.pool.query(
      'INSERT INTO apae.professionals (professional_name, professional_surname, professional_cpf, professional_email, professional_date_of_born, professional_phone, professional_cep, professional_logradouro, professional_bairro, professional_city, professional_UF, professional_cargo, professional_entryTime, professional_exitTime, professional_user, professional_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
      [professional.professional_name, professional.professional_surname, professional.professional_cpf, professional.professional_email, professional.professional_date_of_born, professional.professional_phone, professional.professional_cep, professional.professional_logradouro, professional.professional_bairro, professional.professional_city, professional.professional_UF, professional.professional_cargo, professional.professional_entryTime, professional.professional_exitTime, professional.professional_user, professional.professional_status]
    );
    res.json({ message: 'Profissional salvo com sucesso!', newProfessional: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:pid', async (req, res) => {
  const pid = req.params.pid;
  const professional = req.body.professional;
  try {
    const result = await req.pool.query(
      'UPDATE apae.professionals SET professional_name = $1, professional_surname = $2, professional_cpf = $3, professional_email = $4, professional_date_of_born = $5, professional_phone = $6, professional_cep = $7, professional_logradouro = $8, professional_bairro = $9, professional_city = $10, professional_UF = $11, professional_cargo = $12, professional_entryTime = $13, professional_exitTime = $14, professional_user = $15, professional_status = $16 WHERE id = $17 RETURNING *',
      [professional.professional_name, professional.professional_surname, professional.professional_cpf, professional.professional_email, professional.professional_date_of_born, professional.professional_phone, professional.professional_cep, professional.professional_logradouro, professional.professional_bairro, professional.professional_city, professional.professional_UF, professional.professional_cargo, professional.professional_entryTime, professional.professional_exitTime, professional.professional_user, professional.professional_status, pid]
    );
    res.json({ message: 'Profissional alterado com sucesso!', updatedProfessional: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const result = await req.pool.query('DELETE FROM apae.professionals WHERE id = $1 RETURNING *', [pid]);
    res.json({ message: 'Profissional deletado com sucesso!', deletedProfessional: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;