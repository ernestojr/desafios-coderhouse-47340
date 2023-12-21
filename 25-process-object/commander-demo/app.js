import { Command } from 'commander';

const program = new Command();

program
  .option('-d', 'Flag para debug', false)
  .option('-p <port>', 'Puerto del servidor', 8080)
  .option('--mode <mode>', 'Modo de ejecucion del backend: dev | prod', 'prod');

program.parse();

console.log('opts', program.opts());