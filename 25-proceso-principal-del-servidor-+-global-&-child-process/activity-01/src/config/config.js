import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();

program
  .option('--mode <mode>', 'Este es el modo de ejecucion del backend', 'development')
  .parse();

const mode = program.opts().mode;

let path;
if (mode === 'production') {
  path = './.env.production';
} else {
  path = './.env.development';
}

dotenv.config({ path });

export default {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
};