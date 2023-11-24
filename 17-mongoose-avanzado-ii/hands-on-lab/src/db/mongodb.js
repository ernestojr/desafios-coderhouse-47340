import mongoose from 'mongoose';

const URI = 'mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/school';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database coneccted successfuly 🚀');
  } catch (error) {
    console.error('Ha ocurrido un error al intentar conectarnos a la MongoDB 😨.', error.message);
  }
};
