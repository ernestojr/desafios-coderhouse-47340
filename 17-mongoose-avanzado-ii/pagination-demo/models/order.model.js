import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium',
  },
  price: Number,
  quantity: Number,
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
