const lista = ['Tomates', 'Atun', 'Pollo', 'Harina de trigo'];

function mostrarLista(lista) {
  if (!lista.length) {
    console.log('La lista esta vacia 😱');
  } else {
    let resultado = `Lita de productos:`;
    lista.map((item) => {
      resultado = `${resultado}
      * ${item}`;
    });
    resultado += `
    Total ${lista.length} elementos en la lista.`;
    console.log(resultado);
  }
}

mostrarLista(lista);