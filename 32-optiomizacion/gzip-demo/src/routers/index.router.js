import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Coder House 🖐️');
});

router.get('/gzip-demo', (req, res) => {
  let response = ''
  for (let i = 0; i < 10000; i++) {
    response += 'Hola coder house. Espero que despues de la clase de hoy tengan un buen fin de semana 🎡';
  }
  res.send(response);
});

export default router;