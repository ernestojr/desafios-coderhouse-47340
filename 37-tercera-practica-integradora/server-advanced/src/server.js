import http from 'http';

import config from './config/config.js';
import app from './app.js';

import MongoDb from './db/mongodb.js';

await MongoDb.getInstance();

const server = http.createServer(app);
const PORT = config.PORT;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
