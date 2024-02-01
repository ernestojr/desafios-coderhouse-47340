import express from 'express';
import path from 'path';

import { __dirname } from './utils.js';
import indexRouter from './routers/index.router.js';
import { addLogger } from './config/logger.js';

const app = express();

app.use(addLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

export default app;