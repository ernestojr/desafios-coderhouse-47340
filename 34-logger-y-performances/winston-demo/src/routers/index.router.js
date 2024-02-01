import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  req.logger.silly('Hola desde el request index home 😁 (silly)');
  req.logger.debug('Hola desde el request index home 😁 (debug)');
  req.logger.verbose('Hola desde el request index home 😁 (verbose)');
  req.logger.http('Hola desde el request index home 😁 (http)');
  req.logger.info('Hola desde el request index home 😁 (info)');
  req.logger.warn('Hola desde el request index home 😁 (warn)');
  req.logger.error('Hola desde el request index home 😁 (error)');
  res.send('Hello Coder House 🖐️');
});

export default router;