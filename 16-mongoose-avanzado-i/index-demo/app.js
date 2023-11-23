import mongoose from 'mongoose';

import UserModel from './models/user.model.js';

const test = async () => {
  const URI = 'mongodb://localhost:27017/ecommerce';
  try {
    await mongoose.connect(URI);
    console.log('DB conectada con exito 😁');
    const result = await UserModel.find({ first_name: 'Celia' }).explain('executionStats');
    console.log('result', result);
  } catch (error) {
    console.error('Ah ocurrido un error con la DB 😨', error.message);
  }
};

test();