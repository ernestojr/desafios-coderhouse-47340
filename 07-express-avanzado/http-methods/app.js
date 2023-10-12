const express = require('express');

const app = express();

const users = [
  { id: 1, firstName: 'Rick', lastName: 'Sanchez', age: 70, gender: 'M' },
  { id: 2, firstName: 'Morty', lastName: 'Smith', age: 14, gender: 'M' },
  { id: 3, firstName: 'Summer', lastName: 'Smith', age: 18, gender: 'F' },
  { id: 4, firstName: 'Beth', lastName: 'Smith', age: 35, gender: 'F' },
  { id: 5, firstName: 'Jerry', lastName: 'Smith', age: 35, gender: 'M' },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/api/users', (req, res) => {
  const { body } = req;
  const newUser = {
    id: users.length + 1,
    ...body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:uid', (req, res) => {
  const { body, params } = req;
  const userId = params.uid;
  const position = users.findIndex((currentUser) => {
    return currentUser.id === parseInt(userId);
  });
  if (position === -1) {
    res.status(404).json({ message: 'El usuario no se encontro 😨'});
    return;
  }
  users[position] = {
    id: parseInt(userId),
    ...body,
  };
  res.status(200).json({ message: 'El usuario fue actualizado correctamente 😅'});
});

app.delete('/api/users/:uid', (req, res) => {
  const { params } = req;
  const userId = params.uid;
  const position = users.findIndex((currentUser) => {
    return currentUser.id === parseInt(userId);
  });
  if (position === -1) {
    res.status(404).json({ message: 'El usuario no se encontro 😨'});
    return;
  }
  const user = users.splice(position, 1);
  res.status(200).json({ message: 'El usuario se elimino correctamente 😅', userDeleted: user });
});

app.listen(8080, () => {
  console.log('Server running in http://localhost:8080 🚀');
});
