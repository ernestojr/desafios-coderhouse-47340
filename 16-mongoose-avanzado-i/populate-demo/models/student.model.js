import mongoose from 'mongoose';

const courseItemSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
}, { _id: false });

const studentSchema = new mongoose.Schema({
  first_name: { type: String, required: true, index: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  courses: { type: [courseItemSchema], default: [] }
}, { timestamps: true });

studentSchema.pre('find', function() {
  this.populate('courses.course');
});

export default mongoose.model('students', studentSchema);
