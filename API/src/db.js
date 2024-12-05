const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

pool.connect()
  .then(() => console.log('PostgreSQL conectado!'))
  .catch(err => console.error('Erro ao conectar no PostgreSQL:', err));

module.exports = pool;