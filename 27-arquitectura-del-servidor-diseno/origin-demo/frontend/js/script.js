(function() {
  console.log('Here into the console 😁');
  document.getElementById('button-action')
    .addEventListener('click', () => {
      fetch('http://localhost:8080/demo', {
          credentials: 'include',
        })
        .then(response => response.json())
        .then(data => console.log('data', data))
        .catch(console.error);
    });
})();