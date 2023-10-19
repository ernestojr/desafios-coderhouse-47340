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

router.get('/pets', (req, res) => {
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