const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários.', error: err.message });
  }
});

router.post('/', async (req, res) => {
    const { user } = req.body;
    try {
      const newUser = await User.create(user);
      res.status(201).json({ message: 'Usuário criado com sucesso!', newUser });
    } catch (err) {
      res.status(400).json({ message: 'Erro ao criar usuário.', error: err.message });
    }
  });

  
module.exports = router;
