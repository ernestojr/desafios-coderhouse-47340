(function() {
  fetch('http://localhost:8080/api/auth/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": "pl@mail.com",
      "password": "qwerty"
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      console.log('cookie', document.cookie);
    });
})();