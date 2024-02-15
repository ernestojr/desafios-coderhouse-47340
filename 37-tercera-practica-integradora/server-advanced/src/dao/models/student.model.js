import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dni: { type: String, required: true },
  courses: { type: [String], required: false, default: [] },
  grade: { type: Number, required: false, default: 10 },
  status: { type: String, required: false, default: 'active', enum: ['active', 'inactive'] },
}, { timestamps: true });

export default mongoose.model('User', userSchema);