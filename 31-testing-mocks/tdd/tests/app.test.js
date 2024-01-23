import { sum } from '../app.js';

let result;
let testOk = 0;
let testFailed = 0;
// Algunos escenarios a plantear podrían ser:

// La función debe devolver null si algún parámetro no es numérico.
console.log('Test 1. La función debe devolver null si algún parámetro no es numérico.');
result = sum(1, true);
if (result === null) {
  testOk++;
  console.log('✅ Test 1 ha pasado con éxito');
} else {
  testFailed++;
  console.log('😱 Test 1 ha fallado');
}

// La función debe devolver 0 si no se pasó ningún parámetro
console.log('Test 2. La función debe devolver 0 si no se pasó ningún parámetro.');
result = sum();
if (result === 0) {
  testOk++;
  console.log('✅ Test 2 ha pasado con éxito');
} else {
  testFailed++;
  console.log('😱 Test 2 ha fallado');
}

// La función debe poder realizar la suma correctamente.
console.log('Test 3. La función debe poder realizar la suma correctamente.');
result = sum(2, 3);
if (result === 5) {
  testOk++;
  console.log('✅ Test 3 ha pasado con éxito');
} else {
  testFailed++;
  console.log('😱 Test 3 ha fallado');
}

// La función debe poder hacer la suma con cualquier cantidad de números.
console.log('Test 4. La función debe poder hacer la suma con cualquier cantidad de números.');
result = sum(2, 3, 6);
if (result === 11) {
  testOk++;
  console.log('✅ Test 4 ha pasado con éxito');
} else {
  testFailed++;
  console.log('😱 Test 4 ha fallado');
}

console.log('Resumen:');
console.log('Pruebas exitosas:', testOk);
console.log('Pruebas fallidas:', testFailed);