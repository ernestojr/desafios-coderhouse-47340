const socket = io();

const formMessage = document.getElementById('form-message');

formMessage.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputMessage = document.getElementById('input-message');
  const msg = inputMessage.value;
  socket.emit('message', msg);
  inputMessage.value = '';
});

socket.on('conversation',({ conversation }) => {
  const listMessage = document.getElementById('list-message');
  listMessage.innerText = '';
  conversation.forEach((data) => {
    const li = document.createElement('li');
    li.innerText = `${data.socketId}: ${data.msg}`;
    listMessage.appendChild(li);
  });
});