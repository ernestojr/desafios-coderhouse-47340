import mongoose from 'mongoose';

export default class MongoSingleton {
  static #instance;
  constructor() {
    mongoose.connect(process.env.MONGODB_URI, {})
      .then(() => console.log('Connected to MongoDB 😍'))
      .catch((error) => console.error(error.message));
  }
  static getInstance() {
    if (MongoSingleton.#instance) {
      console.log('Ya existe una instancia de MongoSingleton.');
    } else {
      console.log('Creando una nueva instancia de MongoSingleton');
      MongoSingleton.#instance = new MongoSingleton();
    }
    return MongoSingleton.#instance;
  }
}
