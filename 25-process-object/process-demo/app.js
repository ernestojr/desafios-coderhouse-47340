/* function sum(a, b) {
  console.log(a + b);
}
 */
/* process.on('exit', (code) => {
  console.log('Se ha llamdo el evento exit con codigo', code);
});

process.on('uncaughtException', (exception) => {
  console.log('Se ha llamado al evento uncaughtException', exception);
});

process.on('message', (message) => {
  console.log('Se ha llamado al evento message', message);
}); */

process.on('exit', (code) => {
  if (code === -4) {
    console.log('Proceso finalizado por arguemtnacion invalida en una funcion 😱');
  } else {
    console.log('Proceso finalizado correctamente 😁');
  }
});

const listNumbers = (...numbers) => {
  const types = numbers.map(item => (typeof item));
  const notNumber = types.find(type => type !== 'number');
  if (notNumber) {
    process.exit(-4);
  }
  console.log('numbers', numbers);
};

listNumbers(1,2,3,true,5,6);