import express from 'express';
import handlebars from 'express-handlebars'
import path from 'path';

import { __dirname } from './utils.js';
import indexViewRouter from './routers/views/index.router.js';
import studentApiRouter from './routers/api/students.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexViewRouter);
app.use('/api', studentApiRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message })
});

export default app;
