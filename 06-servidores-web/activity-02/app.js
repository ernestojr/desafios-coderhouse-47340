const express = require('express');

const app = express();

const users = [
  { id: 1, firstName: 'Rick', lastName: 'Sanchez', age: 70, gender: 'M' },
  { id: 2, firstName: 'Morty', lastName: 'Smith', age: 14, gender: 'M' },
  { id: 3, firstName: 'Summer', lastName: 'Smith', age: 18, gender: 'F' },
  { id: 4, firstName: 'Beth', lastName: 'Smith', age: 35, gender: 'F' },
  { id: 5, firstName: 'Jerry', lastName: 'Smith', age: 35, gender: 'M' },
];

app.get('/users/', (req, res) => {
  res.json(users);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find((currentUser) => {
    return currentUser.id === parseInt(userId);
  });
  if (!user) {
    res.json({ error: 'Usuario no encontrado.'})
  } else {
    res.json(user);
  }
});

app.listen(8080, () => {
  console.log('Servidor http escuchando en el puerto 8080.');
});