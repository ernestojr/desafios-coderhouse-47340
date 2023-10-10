const http = require('http');

const server = http.createServer((request, response) => {
  response.end('<h1>Hola desde el modulo nativo de http</h1>');
});

server.listen(8081, () => {
  console.log('Servidor corriendo en el puerto 8081 🚀');
});