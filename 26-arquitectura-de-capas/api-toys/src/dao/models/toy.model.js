import mongoose from 'mongoose';

const toySchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imagen: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model('Toy', toySchema);
