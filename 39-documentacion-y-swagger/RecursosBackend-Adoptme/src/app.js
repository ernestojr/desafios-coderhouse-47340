import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/ecommerce')

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') {
  const swaggerOpts = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Adopme API',
        description: 'Esta es la documentación de la API de Adoptme. Una aplicación para adoptar mascotas 😍.',
      },
    },
    apis: [path.join(__dirname, '..', 'docs', '**', '*.yaml')],
  };
  const specs = swaggerJsDoc(swaggerOpts);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
