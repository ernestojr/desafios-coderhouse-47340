function contador() {
  let count = 0;
  return function() {
    count++;
    console.log('🔸', count);
  }
}

const incrementar = contador();

incrementar(); // 1
incrementar(); // 2
incrementar(); // 3