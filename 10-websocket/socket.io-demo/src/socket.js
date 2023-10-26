import { Server } from 'socket.io'

export const init = (httpServer) => {
  const socketServer = new Server(httpServer);

  socketServer.on('connection', (socketClient) => {

    console.log(`Nuevo cliente socket conectado ${socketClient.id} 🎊`);

    socketClient.emit('client-emit', { status: "ok" });
    socketClient.broadcast.emit('broadcast-emit', { status: "ok" });
    socketServer.emit('all-clients', { status: "ok" });

    socketClient.on('message', (msg) => {
      console.log(`Cliente envio un nuevo mensaje: ${msg}`);
    });
  });
} 