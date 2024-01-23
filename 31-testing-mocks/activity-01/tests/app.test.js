import { login } from '../app.js';

let result;
let testOk = 0;
let testFailed = 0;

// user = coderUser , password = 123

// Si se pasa un password vacío, la función debe consologuear (“No se ha proorcionado un password”)
console.log('T1: Si se pasa un password vacío, la función debe consologuear (“No se ha proorcionado un password”)');
try {
  login('coderUser', '');
  throw new Error('No deberias estar aca 😱');
} catch (error) {
  if (error.message === 'No se ha proorcionado un password') {
    testOk++;
    console.log('✅ T1 paso');
  } else {
    testFailed++;
    console.log('😱 T1 fallo:', error.message);
  }
}

// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
console.log('T2: Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)');
try {
  login('', '123');
  throw new Error('No deberias estar aca 😱');
} catch (error) {
  if (error.message === 'No se ha proporcionado un usuario') {
    testOk++;
    console.log('✅ T2 paso');
  } else {
    testFailed++;
    console.log('😱 T2 fallo:', error.message);
  }
}

// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
console.log('T3: Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)');
try {
  login('coderUser', '12345');
  throw new Error('No deberias estar aca 😱');
} catch (error) {
  if (error.message === 'Contraseña incorrecta') {
    testOk++;
    console.log('✅ T3 paso');
  } else {
    testFailed++;
    console.log('😱 T3 fallo:', error.message);
  }
}

// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
console.log('T4: Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)');
try {
  login('coderUser2', '123');
  throw new Error('No deberias estar aca 😱');
} catch (error) {
  if (error.message === 'Credenciales incorrectas') {
    testOk++;
    console.log('✅ T4 paso');
  } else {
    testFailed++;
    console.log('😱 T4 fallo:', error.message);
  }
}
// Si el usuario y contraseña coinciden, consologuear (“logueado”)
console.log('T5: Si el usuario y contraseña coinciden, consologuear (“logueado”)');
try {
  const result = login('coderUser', '123');
  if (result === 'logueado') {
    testOk++;
    console.log('✅ T5 paso');
  } else {
    testFailed++;
    console.log('😱 T5 fallo:', result);
  }
} catch (error) {
  console.log('error en T5', error.message);
  testFailed++;
}
console.log('Resumen:');
console.log('Pruebas exitosas:', testOk);
console.log('Pruebas fallidas:', testFailed);