import { Router } from 'express';

const router = Router();

const pets = [
  {
    name: 'Rex',
    spice: 'dog'
  }
]

router.param('name', (req, res, next, value) => {
  const pet = pets.find(p => p.name === value);
  if (!pet) {
    res.status(404).json({ message: 'Mascota no encontrada.' })
  }
  req.pet = pet;
  next();
});

router.get('/', (req, res, next) => {
  
}, (req, res) => {
  res.status(200).json(pets);
});

router.post('/', (req, res) => {
  const { body: { name, spice } } = req;
  const newPet = {
    name, spice
  };
  pets.push(newPet);
  res.status(201).json(newPet);
});

router.get('/:name([a-zA-Z%20]+)', (req, res) => {
  res.send(req.pet);
});

router.put('/:name', (req, res) => {
  const { name } = req.params;
  const index = pets.findIndex(p => p.name === name);
  pets[index].adopted = true;
  res.send(pets[index]);
});

router.delete('/:name', (req, res) => {
  // ...
});

router.get('*', (req, res) => {
  res.status(404).send('404, no encontramos esta pagina');
});


export default router;