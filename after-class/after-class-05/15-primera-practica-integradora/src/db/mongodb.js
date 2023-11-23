import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/school';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database connected susscessfully 🚀');
  } catch (error) {
    console.error('Ocurrio un error al intenter conectarnos a la base de datos 😨');
  }
}
