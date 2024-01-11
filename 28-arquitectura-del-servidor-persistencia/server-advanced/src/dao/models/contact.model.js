import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
  firts_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
