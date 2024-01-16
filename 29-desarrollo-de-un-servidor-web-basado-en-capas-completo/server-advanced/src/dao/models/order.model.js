import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
  code: { type: Number, required: true },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: { type: Array, required: true },
  total: { type: Number, required: false },
  status: { type: String, required: false, default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);