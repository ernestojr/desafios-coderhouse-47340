const express = require('express');
const path = require('path');
const morgan = require('morgan');

const usersRouter = require('./routers/users.router');
const petsRouter = require('./routers/pets.router');
const indexRouter = require('./routers/index.router');

const app = express();
const PORT = 8080;

app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('Se ha recibido una nueva solicitud 😁');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api', usersRouter, petsRouter);

app.use((error, req, res, next) => {
  console.log('Ah ocurrido un error 😨:', error.message);
  res.status(500).json({ status: 'error', message: 'Ah ocurrido un error desconocido. Intente mas tarde 😅' });
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});