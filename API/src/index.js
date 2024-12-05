const express = require('express');
const app = express();
const routes = require('./api/routes');
const pool = require('./db');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.use('/api', routes);

app.listen(5050, function () {
  console.log('Aplicação executando na porta 5050!');
});