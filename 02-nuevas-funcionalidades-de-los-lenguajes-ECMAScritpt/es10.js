(function (run) {
  if (!run) return;

  async function example(mode) {
    if (mode === 'calculator') {
      const Calculator = await require('./calculator');
      const calc = new Calculator();
      console.log(calc.sum(1, 2));
    } else {
      console.log('No mode selected');
    }
  }
  
  example('calculator');
  
})(false);

(function (run) {
  if (!run) return;
  let cadena = '    Hola mundo     ';
  console.log('cadena.length', cadena.length);
  console.log('cadena.trim()', cadena.trim());
  console.log('cadena.trim().length', cadena.trim().length);
})(false);

(function (run) {
  if (!run) return;
  let arrayAnidado = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
  console.log('arrayAnidado.flat()', arrayAnidado.flat());
})(false);