const express = require('express');

const usersRouter = require('./routers/users.router');
const petsRouter = require('./routers/pets.router');
const indexRouter = require('./routers/index.router');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api', usersRouter, petsRouter);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});