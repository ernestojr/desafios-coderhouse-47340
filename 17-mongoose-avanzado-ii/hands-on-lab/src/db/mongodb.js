import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/school';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database coneccted successfuly 🚀');
  } catch (error) {
    console.error('Ha ocurrido un error al intentar conectarnos a la MongoDB 😨.', error.message);
  }
};
