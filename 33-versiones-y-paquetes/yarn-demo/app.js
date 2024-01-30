import express from 'express';
import operations from 'my-440-calculator-package';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from yarn project 😍');
});

app.get('/sum/:a/:b', (req, res) => {
  const { params: { a, b } } = req;
  res.send(`El resultado de la suma ${a} + ${b} es: ${operations.sum(parseInt(a), parseInt(b))} 😍`);
});

app.listen(8080, () => {
  console.log('Servidor corriendo en http://localhost:8080 🎯');
});
