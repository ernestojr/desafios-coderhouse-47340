import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: false, default: 'user' },
  orders: { type: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ], required: false, default: [] },
}, { timestamps: true });

export default mongoose.model('User', userSchema);