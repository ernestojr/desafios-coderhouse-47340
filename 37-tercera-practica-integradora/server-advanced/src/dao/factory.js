import config from '../config/config.js';

export let StudentDao = null;

switch (config.TYPE_PERSISTENCE) {
  case 'file':
    StudentDao = (await import('./student/student.file.dao.js')).default;
    break;
  case 'mongo':
    StudentDao = (await import('./student/student.mongo.dao.js')).default;
    break;
  default:
    StudentDao = (await import('./student/student.memory.dao.js')).default;
}