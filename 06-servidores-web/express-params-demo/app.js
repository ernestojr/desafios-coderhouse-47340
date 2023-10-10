const express = require('express');

const app = express();

app.get('/welcome/:fistName', (req, res) => {
  const { fistName } = req.params;
  res.send(`Te damos la bienvenida ${fistName} 😉`);
});

app.get('/welcome/:fistName/:lastName', (req, res) => {
  const { fistName, lastName } = req.params;
  res.send(`Te damos la bienvenida ${fistName} ${lastName} 😎`);
});

// /carrito/:idCarrito/productos/:idProducto

app.listen(8080, () => {
  console.log('Servidor http escuchando en el puerto 8080.');
});