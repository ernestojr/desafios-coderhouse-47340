const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const { randomNumber } = require('./utils');

const app = express();
const PORT = 8080;

const foods = [
  {
    name: 'Pizza',
    price: 150,
  },
  {
    name: 'Hamburguesa',
    price: 100,
  },
  {
    name: 'Hot Dog',
    price: 50,
  },
  {
    name: 'Tacos',
    price: 70,
  },
  {
    name: 'Torta',
    price: 80,
  },
  {
    name: 'Burrito',
    price: 90,
  },
  {
    name: 'Pasta',
    price: 120,
  },
  {
    name: 'Ensalada',
    price: 70,
  },
  {
    name: 'Sushi',
    price: 200,
  },
  {
    name: 'Alitas',
    price: 100,
  }
];

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const user = {
    id: 'e9edb299-ceab-43d2-bc04-9be1d69e901d',
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 70,
    email: 'rs@email.com',
    role: 'admin',
  };
  res.render('index', { title: 'Coder House 🚀', user, foods, isAdmin: user.role === 'admin' });
});

app.listen(PORT, () => {
  console.log(`Server runnig into http://localhost:${PORT} 🚀`);
});
