import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
