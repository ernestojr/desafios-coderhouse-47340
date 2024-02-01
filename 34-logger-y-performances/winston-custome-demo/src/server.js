import http from 'http';

import config from './config/config.js'
import app from './app.js';

const server = http.createServer(app);
const PORT = config.port;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});