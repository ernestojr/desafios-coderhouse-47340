function suma(a, b) {
  // contexto local
  let result = a + b;
  return result;
}

const sumav2 = (a, b) => {
  let result = a + b;
  return result;
}

const sumav3 = (a, b) => a + b;

const saludo = name => console.log('Hello ' + name);

saludo('Coder House')