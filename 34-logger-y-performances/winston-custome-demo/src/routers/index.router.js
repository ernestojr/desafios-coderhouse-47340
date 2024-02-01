import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  req.logger.debug('Hola desde el request index home 😁 (debug)');
  req.logger.info('Hola desde el request index home 😁 (info)');
  req.logger.warning('Hola desde el request index home 😁 (warn)');
  req.logger.error('Hola desde el request index home 😁 (error)');
  req.logger.fatal('Hola desde el request index home 😁 (fatal)');
  res.send('Hello Coder House 🖐️');
});

export default router;