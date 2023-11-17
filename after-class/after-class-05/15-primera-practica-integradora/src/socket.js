import { Server } from 'socket.io';

import MessageModel from './models/message.model.js';

let io;

export const init = (httpServer) => {
  io = new Server(httpServer);

  io.on('connection', async (clientSocket) => {
    console.log(`Nuevo cliente socket conectado 🚀 (${clientSocket.id})`);
    const messages = await MessageModel.find({});
    clientSocket.emit('update-messages', messages);

    clientSocket.on('new-message', async (msg) => {
      await MessageModel.create(msg);
      const messages = await MessageModel.find({});
      io.emit('update-messages', messages);
    });

  });
};