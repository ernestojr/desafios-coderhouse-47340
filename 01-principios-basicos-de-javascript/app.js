function problemaConVar() {
  var i = 22;
  console.log('El valor inicial de i es:', i);
  console.log('Contaremos hasta 15:');
  for (var i = 0; i < 15; i++) {
    console.log('-', i + 1);
  }
  console.log('El valor de i fuera del for es:', i, '😱');
}

// problemaConVar();

function solucionConLet() {
  let i = 22;
  console.log('El valor inicial de i es:', i);
  console.log('Contaremos hasta 15:');
  for (let i = 0; i < 15; i++) {
    console.log('-', i + 1);
  }

  console.log('El valor de i fuera del for es:', i, '😎');
}

// solucionConLet();

function usandoConst() {
  const product = 'Tv 4k 📺';
  console.log('Producto:', product);
  product = 'Tv 8k 📺'; // TypeError: Assignment to constant variable 😱.
}

// usandoConst();

function usandoMutabilidad() { // 
  const product = {
    name: 'Tv 4k 📺',
    price: 1000,
  };

  console.log('Producto:', product);

  product.name = 'Tv 8k 📺';
  product.price = 2000;

  console.log('Producto:', product);
}

usandoMutabilidad();
