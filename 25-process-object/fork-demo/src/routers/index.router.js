import { Router } from 'express';
import { fork } from 'child_process';
import path from 'path';

import { __dirname } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Coder House 🖐️');
});


router.get('/suma-compleja', (req, res) => {
  const child = fork(path.join(__dirname, './forks/suma-compleja.js'));
  child.send('Inicia el calculo por favor!');
  child.on('message', (result) => {
    res.send(`Este es el resultado de la suma ${result} 😁`);
  });
});

export default router;