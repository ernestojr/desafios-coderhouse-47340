import { Router } from 'express';
import path from 'path';

import { __dirname } from '../../utils.js';
import EmailService from '../../services/email.service.js';
import TwilioService from '../../services/twilio.service.js';


const router = Router();

router.get('/send-otp', async (req, res) => {
  const twilioService = TwilioService.getInstance();
  const response = await twilioService.sendSMS('+56945472812', `Su codigo de verificación es: ${Date.now()}`);
  res.status(200).json(response);
});

router.get('/send-welcome-notification', async (req, res) => {
  const emailService = EmailService.getInstance();
  const result = await emailService.sendEmail(
    'ernesto20145@gmail.com, ernestorojas.teacher@gmail.com',
    'Hola Ernesto, te damos la bienvenida 😍',
    `<div>
      <h1>Hola Ernesto Rojas.Coder House 😍</h1>
      <h2>El equipo de Coder House te da la bienvenida 😍</h2>
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