(function(run) {
  if (!run) return;

  const div = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) return reject('No se puede dividir por cero');
      console.log(`${a} / ${b} => ${a / b}`);
      return resolve(a / b);
    });
  }

  div(2, 0)
    .then(result => console.log('div', result))
    .catch(error => console.error('div', error))
    .finally(() => console.log('Here into finally after error'));

  div(2, 3)
    .then(result => console.log('div', result))
    .catch(error => console.error('div', error))
    .finally(() => console.log('Here into finally after success'));

})(false);

(function(run) {
  if (!run) return;
  const { promises: { existFile, readFile, writeFile } } = require('./my-fs');
  // Example of anidaded promises
  // 1.- Validar si existe un archivo - existFile(fileInput): Promise
  // 2.- Leer archivo - readFile(fileInput): Promise
  // 3.- Escrbir archivo - writeFile(fileOutput, content): Promise
  const copyFile = fileInput => new Promise((resolve, reject) => {
    existFile(fileInput)
      .then(exist => {
        if (!exist) return reject(`File ${fileInput} doesn't exist ⛔`);
        return readFile(fileInput);
      })
      .then(content => {
        const fileOutput = `copy-${fileInput}`;
        return writeFile(fileOutput, content);
      })
      .then(() => resolve(`File ${fileInput} was copied into copy-${fileInput} ✅`))
      .catch(error => reject(error));
  });

  copyFile('texto.txt')
    .then(result => console.log('copyFile', result))
    .catch(error => console.error('copyFile', error));

})(true);