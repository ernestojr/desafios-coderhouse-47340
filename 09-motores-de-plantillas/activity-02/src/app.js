const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const usersRouter = require('./routers/users.router');
const indexRouter = require('./routers/index.router');

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', usersRouter);

app.listen(PORT, () => {
  console.log(`Server runnig into http://localhost:${PORT} 🚀`);
});
