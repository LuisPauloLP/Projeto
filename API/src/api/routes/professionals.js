const express = require('express');
const router = express.Router();

//MONGODB
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bc', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado Profissionais');
});

const professionalsSchema = new mongoose.Schema({
    professional_name: String,
    professional_surname: String,
    professional_cpf: Number,
    professional_email: String,
    professional_date_of_born: { type: Date, required: true },
    professional_phone: Number,
    professional_cep: Number,
    professional_logradouro: String,
    professional_bairro: String,
    professional_city: String,
    professional_UF: String,
    professional_cargo: String,
    professional_entryTime: { type: String, required: true },
    professional_exitTime: { type: String, required: true },
    professional_user: String,
    professional_status: Boolean,
    professional_create_date: { type: Date, default: Date.now }
  });

const Professional = mongoose.model('Professional', professionalsSchema); //MONGODB

// Buscar usuários por nome
router.get('/search', async (req, res) => {
  const nome = req.query.name; // O nome será passado como parâmetro na query string
  try {
    const professionals = await Professional.find({ professional_name: { $regex: nome, $options: 'i' } }); // Busca por nome parcial, case insensitive
    res.json(professionals);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar profissionais.', error: err.message });
  }
});

// Retornar todos os profissionais
// GET "/professionals"
router.get('/', async (req, res) => {
  try {
    const foundedProfessional = await Professional.find();
    console.log('Objetos encontrados com sucesso!');
    res.status(200).json(foundedProfessional);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retornar um profissional específico
// GET /professionals/:pid
router.get('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const foundedProfessional = await Professional.findById( pid );
    console.log('Objeto encontrado com sucesso!');
    res.json({ message: 'Profissional encontrado com sucesso!', foundedProfessional });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Inserir um novo profissional
// POST "/professionals" BODY { ... }
router.post('/', async (req, res) => {
  const professional = req.body.professional;
  try {
    const newProfessional = await Professional.create(professional);
    console.log('Objeto salvo com sucesso!');
    res.json({ message: 'Profissional salvo com sucesso!', newProfessional });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.post('/', async (req, res) => {
//   const { professional } = req.body;

//   try {
//     // Validação básica do formato dos horários
//     if (!/^\d{2}:\d{2}$/.test(professional.professional_entryTime) || !/^\d{2}:\d{2}$/.test(professional.professional_exitTime)) {
//       return res.status(400).json({ message: 'Horários devem estar no formato HH:mm.' });
//     }

//     const newProfessional = await Professional.create(professional);
//     console.log('Objeto salvo com sucesso!');
//     res.json({ message: 'Profissional salvo com sucesso!', newProfessional });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// Alterar um profissional
// PUT "/professionals/:id" BODY { ... }
router.put('/:pid', async (req, res) => {
  const pid = req.params.pid;
  const newProfessional = req.body.professional;
  console.log(newProfessional);
  try {
    const updatedProfessional = await Professional.findByIdAndUpdate(pid, 
      { professional_name: newProfessional.professional_name,
        professional_surname: newProfessional.professional_surname,
        professional_cpf: newProfessional.professional_cpf,
        professional_email: newProfessional.professional_email,
        professional_date_of_born: newProfessional.professional_date_of_born,
        professional_phone: newProfessional.professional_phone,
        professional_cep: newProfessional.professional_cep,
        professional_logradouro: newProfessional.professional_logradouro,
        professional_bairro: newProfessional.professional_bairro,
        professional_city: newProfessional.professional_city,
        professional_UF: newProfessional.professional_UF,
        professional_cargo: newProfessional.professional_cargo,
        professional_entryTime: newProfessional.professional_entryTime,
        professional_exitTime: newProfessional.professional_exitTime,
        professional_user: newProfessional.professional_user,
        professional_status: newProfessional.professional_status,
      }, { new: true });
    console.log('Objeto Atualizado:', updatedProfessional);
    res.json({ message: 'Profissional alterado com sucesso!', updatedProfessional });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.put('/:pid', async (req, res) => {
//   const pid = req.params.pid;
//   const { professional } = req.body;

//   try {
//     // Validação básica do formato dos horários
//     if (!/^\d{2}:\d{2}$/.test(professional.professional_entryTime) || !/^\d{2}:\d{2}$/.test(professional.professional_exitTime)) {
//       return res.status(400).json({ message: 'Horários devem estar no formato HH:mm.' });
//     }

//     const updatedProfessional = await Professional.findByIdAndUpdate(
//       pid,
//       {
//         ...professional
//       },
//       { new: true }
//     );
//     console.log('Objeto Atualizado:', updatedProfessional);
//     res.json({ message: 'Profissional alterado com sucesso!', updatedProfessional });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// Deletar um profissional
// DELETE "/professionals/:id"
router.delete('/:pid', async (req, res) => {
  const pid = req.params.pid;
  try {
    const deletedProfessional = await Professional.findByIdAndDelete(pid);
    console.log('Objeto deletado:', deletedProfessional);
    res.json({ message: 'Profissional deletado com sucesso!', deletedProfessional });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
