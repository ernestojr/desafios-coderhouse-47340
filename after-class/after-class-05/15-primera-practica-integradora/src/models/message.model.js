import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: String,
  body: String,
}, { timestamps: true });

export default mongoose.model('Menssage', messageSchema);
