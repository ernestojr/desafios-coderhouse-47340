import mongoose from 'mongoose';
import config from '../config/config.js';

// Patron Singleton
export default class MongoDb {
  static #instance = null;
  constructor(connnection) {
    this.connnection = connnection;
  }
  static async getInstance() {
    if (config.TYPE_PERSISTENCE !== 'mongo') {
      return null;
    }
    if (!MongoDb.#instance) {
      try {
        const URI = config.MONGO_URI;
        const connection = await mongoose.connect(URI);
        console.log('Database connected 🚀');
        MongoDb.#instance = new MongoDb(connection);
      } catch (error) {
        console.error('Error to connect to database', error.message);
      }
    }
    return MongoDb.#instance;
  }
} 