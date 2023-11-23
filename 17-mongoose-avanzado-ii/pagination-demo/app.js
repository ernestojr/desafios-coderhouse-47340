import mongoose from 'mongoose';

import StudentModel from './models/student.model.js';

const URI = 'mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/school?retryWrites=true&w=majority';


const query = async () => {
  const result = await StudentModel.paginate({"group": "1A"}, { limit: 5, page: 1, sort: { grade: -1 } });
  console.log('result', JSON.stringify(result, null, 2));
}

async function test() {
  try {
    await mongoose.connect(URI);
    console.log('DB conectada con exito 😁');
    await query();
  } catch (error) {
    console.error('Error 😨', error.message);
  }
}

test();