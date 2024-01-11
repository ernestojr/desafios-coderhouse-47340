import config from '../config/config.js';

export let contactDao;

switch (config.persistence) {
  case 'mongodb':
    const ContactDaoMongoDb = (await import('./contact.mongodb.dao.js')).default;
    contactDao = new ContactDaoMongoDb();
    break;
  default:
    const ContactDaoMemory = (await import('./contact.memory.dao.js')).default;
    contactDao = new ContactDaoMemory();
    break;
}