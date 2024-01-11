import { contactsRepository } from '../repositories/index.js';

export default class ContactsService {

  static getAll(filters = {}, opts = {}) {
    return contactsRepository.getAll(filters, opts);
  }
  static getById(uid) {
    return contactsRepository.getById(uid);
  }
  static create(data) {
    return contactsRepository.create(data);
  }
  static updateById(uid, data) {
    return contactsRepository.updateById(uid, data);
  }
  static deleteById(uid) {
    return contactsRepository.deleteById(uid);
  }
}