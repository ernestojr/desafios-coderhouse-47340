const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde el servidor de express.');
});

app.get('/login', (req, res) => {
  res.send('Este es el login.');
});

app.listen(8080, () => {
  console.log('Servidor http escuchando en el puerto 8080.');
});