const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', { title: 'Coder House 🚀', fullname: 'Mauricio' });
});

app.listen(PORT, () => {
  console.log(`Server runnig into http://localhost:${PORT} 🚀`);
});
