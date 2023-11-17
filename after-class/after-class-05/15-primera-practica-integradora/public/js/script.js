(function() {
  let email = '';
  const socket = io();

  document.getElementById('form-message')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('input-message');
      const newMsg = {
        user: email,
        body: input.value,
      };
      input.value = '';
      input.focus();
      socket.emit('new-message', newMsg);
    });

  socket.on('update-messages', (messages) => {
    console.log('messages', messages);
    const logMessages = document.getElementById('log-messages');
    logMessages.innerText = '';
    messages.forEach((message) => {
      const p = document.createElement('p');
      p.innerText = `${message.user}: ${message.body}`;
      logMessages.appendChild(p);
    });
  });
  
  Swal.fire({
    title: 'Identificate por favor 👮',
    input: 'text',
    inputLabel: 'Ingresa tu correo',
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Necesitamos que ingreses un correo para continuar!';
      }
    },
  })
  .then((result) => {
    email = result.value.trim();
    console.log(`Hola ${email}, bienvenido 🖐️`);
  });

})();