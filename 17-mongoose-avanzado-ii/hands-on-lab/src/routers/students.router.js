import { Router } from 'express';
import StudentModel from '../models/student.model.js';
import { buildResponsePaginated } from '../utils.js';

const router = Router();

router.get('/students', async (req, res) => {
  const { limit = 10, page = 1, sort, search } = req.query;
  // sort esta asociado al campo grade. Ademas los posibles valores son asc y desc
  // search esta asociado al campo group
  const criteria = {};
  const options = { limit, page };
  if (sort) { 
    options.sort = { grade: sort };
  }
  if (search) {
    criteria.group = search;
  }
  const result = await StudentModel.paginate(criteria, options);
  res.status(200).json(buildResponsePaginated({ ...result, sort, search }));
});

export default router;