import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  difficulty: { type: Number },
  tipics: {
    type: Array,
    default: [],
  },
  professor: { type: String },
  student: {
    type: Array,
    default: [],
  }
}, { timestamps: true });

export default mongoose.model('courses', courseSchema);
