const express = require('express');

const app = express();

app.get('/welcome', (req, res) => {
  const htmlText = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p style="color: red;">Te damos la bienvenida a nuestra página web</p>
  </body>
  </html>`;
  res.send(htmlText);
});

app.get('/users', (req, res) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    cours: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
  };
  res.send(user);
});

app.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080 🚀');
});