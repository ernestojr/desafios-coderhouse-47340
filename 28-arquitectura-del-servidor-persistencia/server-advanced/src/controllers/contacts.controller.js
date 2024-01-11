import ContactsService from '../services/contacts.service.js';
import ContactDTO from '../dto/contact.dto.js';

export default class ContactsController {
  static async getAll(filters = {}, opts = {}) {
    const contacts = await ContactsService.getAll(filters, opts);
    return contacts;
  }
  static async getById(uid) {
    const contact = await ContactsService.getById(uid);
    return contact;
  }
  static async create(data) {
    const newContact = { ...data };
    const contact = await ContactsService.create(newContact);
    return contact;
  }
  static async updateById(uid, data) {
    await ContactsService.updateById(uid, data);
  }
  static async deleteById(uid) {
    await ContactsService.deleteById(uid);
  }
}