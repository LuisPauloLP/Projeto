// module.exports = router;
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const pool = require('./db');

// Retornar todos os usuários
// GET "/users"
router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      console.log('Usuários encontrados com sucesso GET!');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Erro ao buscar usuários:', err.message);
      res.status(400).json({ message: err.message });
    }
  });
  
  // Retornar um usuário específico
  // GET "/users/:pid"
  router.get('/:pid', async (req, res) => {
    const pid = req.params.pid;
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [pid]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      console.log('Usuário encontrado com sucesso!');
      res.json(result.rows[0]);
    } catch (err) {
      console.error('Erro ao buscar o usuário GET:', err.message);
      res.status(400).json({ message: err.message });
    }
  });
  
  // Inserir um novo usuário
  // POST "/users" BODY { ... }
  router.post('/', async (req, res) => { 
    const {author_name, author_email, author_user, author_pwd, author_level, author_status } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO users (author_name, author_email, author_user, author_pwd, author_level, author_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [author_name, author_email, author_user, author_pwd, author_level, author_status]
      );
      console.log('Usuário salvo com sucesso!');
      console.log(result.rows);
      res.status(201).json({ message: 'Usuário salvo com sucesso!', user: result.rows[0] });
    } catch (err) {
      console.error('Erro ao salvar o usuário POST:', err.message);
      res.status(400).json({ message: err.message });
    }
  });

  // router.post('/', async (req, res) => {
  //   const user = req.body.user;
  //   try {
  //     const newUser = await User.create(user);
  //     console.log('Objeto salvo com sucesso!');
  //     res.json({ message: 'Usuário salvo com sucesso!', newUser });
  //   } catch (err) {
  //     res.status(400).json({ message: err.message });
  //   }
  // });



   // Alterar um usuário
  // PUT "/users/:pid" BODY { ... }
  router.put('/:pid', async (req, res) => {
    const pid = req.params.pid;
    const { author_name, author_email, author_pwd, author_level, author_status } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE users SET author_name = $1, author_email =$2, author_pwd = $3, author_level = $4, author_status = $5 WHERE id = $6 RETURNING *',
        [author_name, author_email, author_pwd, author_level, author_status, pid]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      console.log('Usuário atualizado com sucesso!');
      res.json({ message: 'Usuário atualizado com sucesso!', user: result.rows[0] });
    } catch (err) {
      console.error('Erro ao atualizar o usuário PUT:', err.message);
      res.status(400).json({ message: err.message });
    }
  });


  
  // Deletar um usuário
  // DELETE "/users/:pid"
  router.delete('/:pid', async (req, res) => {
    const pid = req.params.pid;
  
    try {
      const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [pid]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      console.log('Usuário deletado com sucesso!');
      res.json({ message: 'Usuário deletado com sucesso!', user: result.rows[0] });
    } catch (err) {
      console.error('Erro ao deletar o usuário:', err.message);
      res.status(400).json({ message: err.message });
    }
  });
  
  
  module.exports = router;
