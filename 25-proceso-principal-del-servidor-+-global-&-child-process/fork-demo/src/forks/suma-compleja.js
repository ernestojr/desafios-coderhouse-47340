function suma() {
  let result = 0;
  for (let index = 0; index < 5e9; index++) {
    result += 1;
  }
  return result;
}

process.on('message', (message) => {
  console.log('message', message);
  const result = suma();
  process.send(result);
});