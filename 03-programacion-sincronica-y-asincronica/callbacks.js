(function(run) {
  if (!run) return;

  let setData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log('setData', setData);

  let newSetData = setData.map(function(value) {
    return value + 1;
  });

  //let newSetData = setData.map(value => value + 1);

  console.log('newSetData', newSetData);

  newSetData = setData.map(value => value * 2);

  console.log('newSetData', newSetData);

  const callback = (value) => {
    if ((value % 2) === 0) {
      return 'par';
    } else {
      return 'impar';
    }
  };

  // const callback = (value) => value % 2 === 0 ? 'par' : 'impar';

  newSetData = setData.map(callback);

  console.log('newSetData', newSetData);

})(false);

(function(run) {
  if (!run) return;

  const setData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log('setData', setData);

  const myMap = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i], i, array));
    }
    return newArray;
  };

  const newSetData = myMap(setData, value => value + 1);

  console.log('newSetData', newSetData);

  Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };

  const newSetData2 = setData.myMap(value => value ** 2);

  console.log('newSetData2', newSetData2);

})(false);

(function(run) {
  if (!run) return;

  const sum = (a, b) => a + b;
  const res = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  const calc = (a, b, callback) => {
    console.log(`${a} ${callback.name} ${b}`);
    return callback(a, b);
  };

  console.log('calc', calc(2, 3, sum));
  console.log('calc', calc(2, 3, res));
  console.log('calc', calc(2, 3, mul));
  console.log('calc', calc(2, 3, div));

})(false);

(function(run) {
  if (!run) return;
  const { existFile, readFile, writeFile } = require('./my-fs');
  // 1.- Validar si existe un archivo - existFile(fileInput, callback)
  // 2.- Leer archivo - readFile(fileInput, callback)
  // 3.- Escrbir archivo - writeFile(fileOutput, content, callback)
  const copyFile = (fileInput, callback) => {
    existFile(fileInput, (error, exist) => {
      if (error) {
        return callback(error);
      } else if (!exist) {
        return callback(new Error('El archivo no existe ⛔'));
      }
      readFile(fileInput, (error, content) => {
        if (error) {
          return callback(error);
        }
        const fileOutput = `copy-${fileInput}`;
        writeFile(fileOutput, content, (error) => {
          if (error) {
            return callback(error);
          }
          callback(null, 'El archivo se copio con exito ✅');
        });
      });
    });
  };

  copyFile('texto.txt', (error, result) => {
    if (error) {
      console.error('copyFile', error);
    } else {
      console.log('copyFile', result);
    }
  });

})(true);