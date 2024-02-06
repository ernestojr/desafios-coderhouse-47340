import http from 'http';
import cluster from 'cluster';
import { cpus } from 'os';

import app from './app.js';

if (cluster.isPrimary) {
  const cpuCount = cpus().length
  console.log(`Soy el proceso primario y voy a crear ${cpuCount} workers 🎡`);
  for (let index = 0; index < cpuCount; index++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`El worker ${worker.process.pid} ha muerto`, code, signal);
    if (String(signal) !== 'SIGTERM') {
      cluster.fork();
    }
  });
} else {
  console.log('Soy el worker y voy a ejecutar express js.');
  const server = http.createServer(app);
  const PORT = 8080;

  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 🚀 (${process.pid})`);
  });
}
