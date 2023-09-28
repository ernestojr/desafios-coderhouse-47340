(function(run) {
  if (!run) return;

  function one() {
    console.log('(1) Start function one');
    two();
    console.log('(2) End function one');
  }

  function two() {
    console.log('(3) Start function two');
    three();
    console.log('(4) End function two');
  }

  function three() {
    console.log('(5) Start function three');
    console.log('(6) End function three');
  }

  one();
  
})(false);

(function(run) {
  if (!run) return;

  const { writeFile } = require('./my-fs');

  writeFile('texto.txt', 'Hello world', (error, result) => {
    if (error) return console.error('writeFile', error);
    console.log('Wrote file successfully', result);
  });

  console.log('End of the program');
  
})(false);

(function(run) {
  if (!run) return;

  const div = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) return reject('No se puede dividir por cero');
      console.log(`${a} / ${b} => ${a / b}`);
      return resolve(a / b);
    });
  }

  const asyncFunction = async () => {
    try {
      const result = await div(2, 2);
      console.log('div result', result);
    } catch (error) {
      console.log('Error', error);
    }
  };

  asyncFunction();
  
})(true);