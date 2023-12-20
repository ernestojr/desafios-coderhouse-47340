import mongoose, { Schema } from 'mongoose';
import paginator from 'mongoose-paginate-v2';

const studentSubSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  grade: Number,
}, { _id: false });

const courseSchema = new Schema({
  title: { type: String, required: true },
  desciption: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  students: { type: [studentSubSchema], default: []}
}, { timestamps: true });

courseSchema.plugin(paginator);

courseSchema.pre('find', function (){
  this.populate('professor')
  .populate('students.student');
});

export default mongoose.model('Course', courseSchema);