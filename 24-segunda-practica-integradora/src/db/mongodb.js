import mongoose from 'mongoose';

export const init = async () => {
  try {
    const URI = 'mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/coder-house';
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database', error.message);
  }
};
