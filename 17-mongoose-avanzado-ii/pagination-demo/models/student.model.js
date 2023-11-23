import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
}, { timestamps: true });

studentSchema.plugin(mongoosePaginate);

export default mongoose.model('Student', studentSchema);
