(function () {

  console.log('Hola desde una IIFE!');

})();

(function (run) {
  if (!run) return;
  
  function oldPow(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  function newPow(base, exponent) {
    return base ** exponent;
  }

  console.log('oldPow', oldPow(2, 3));
  console.log('newPow', newPow(2, 3));

})(false);

(function (run) {
  if (!run) return;
  let userNames = [
    //'Juan',
    'Pedro',
    'Maria',
    'Jose'
  ];
  if (userNames.includes('Juan')) {
    console.log('Juan esta en el arreglo');
  } else {
    console.log('Juan no esta en el arreglo');
  }
})(true);
