(function () {
  document
    .getElementById('get-cookies-button')
    .addEventListener('click', () => {
      fetch('/api/cookie')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error);
    })
})();