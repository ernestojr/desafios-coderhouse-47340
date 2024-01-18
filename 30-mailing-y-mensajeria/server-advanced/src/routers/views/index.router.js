import { Router } from 'express';
import path from 'path';

import { __dirname } from '../../utils.js';

import EmailService from '../../services/email.service.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Hello People 🖐️' });
});


router.get('/mail', async (req, res) => {
  const emailService = EmailService.getInstance();
  const result = await emailService.sendEmail(
    'ernesto20145@gmail.com, ernestorojas.teacher@gmail.com',
    'Hola, desde nuestro servidor en Node js v2',
    `<div>
      <h1>Hola Coder House 😍</h1>
      <img src="cid:hello-cat" alt="Hello" />
    </div>`,
    [
      {
        filename: 'hello-cat.gif',
        path: path.join(__dirname, './images/cat.gif'),
        cid: 'hello-cat',
      },
    ]
  );
  res.status(200).json(result);
});



export default router;