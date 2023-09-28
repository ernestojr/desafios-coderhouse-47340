const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject('Operación innecesaria ⛔');
    const result = a + b;
    if (result < 0) return reject('La calculadora sólo debe devolver resultados positivos ⛔');
    return resolve(result);
  });
};

const sub = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject('Operación invalida ⛔');
    const result = a - b;
    if (result < 0) return reject('La calculadora sólo debe devolver resultados positivos ⛔');
    return resolve(result);
  });
};

const mul = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject('Operación innecesaria ⛔');
    const result = a * b;
    if (result < 0) return reject('La calculadora sólo debe devolver resultados positivos ⛔');
    return resolve(result);
  });
};

const div = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) return reject('No se puede dividir por cero');
    const result = a / b;
    return resolve(result);
  });
}

const calc = async () => {
  try {
    let result = await sum(2, 3);
    console.log(`sum result ${result} ✅`);
    result = await sub(4, 3);
    console.log(`sub result ${result} ✅`);
    result = await mul(2, 3);
    console.log(`mul result ${result} ✅`);
    result = await div(10, 5);
    console.log(`div result ${result} ✅`);
  } catch (error) {
    console.error('calc', error);
  }
}

calc();