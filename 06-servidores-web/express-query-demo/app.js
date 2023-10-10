const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  const { query } = req;
  console.log('query.c', query.c);
  res.json(query);
});


app.listen(8080, () => {
  console.log('Servidor http escuchando en el puerto 8080.');
});