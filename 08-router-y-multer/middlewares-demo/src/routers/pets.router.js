const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const router = Router();

const pets = [
  {
    id: '727bcaf7-cffa-4392-b59a-32699315769e',
    name: 'Snowball',
    race: 'Maltez',
    age: '3',
    gender: 'M',
  },
];

const myMiddleware = (req, res, next) => {
  console.log('Se ha recibido una nueva solicitud de pets 🎊');
  next();
};

router.use((req, res, next) => {
  console.log('Hola desde el middleware de router 🖐️');
  next();
});

router.get('/pets', myMiddleware, (req, res) => {
  res.status(200).json(pets);
});

router.post('/pets', (req, res) => {
  const { body } = req;
  const newPet = {
    ...body,
    id: uuidV4(),
  };
  pets.push(newPet);
  res.status(201).json(newPet);
});

module.exports = router;