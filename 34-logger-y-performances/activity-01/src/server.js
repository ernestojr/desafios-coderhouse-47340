import http from 'http';

import config from './config/config.js'
import { logger } from './config/logger.js'
import app from './app.js';

const server = http.createServer(app);
const PORT = config.port;

server.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT} 🚀`);
});