import ContactDto from '../dto/contact.dto.js';

export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll(filter = {}, opts = {}) {
    const contacts = await this.dao.get(filter, opts);
    return contacts.map(contact => new ContactDto(contact));
  }

  async getById(uid) {
    let contact = await this.dao.getById(uid)
    if (contact) {
      contact = new ContactDto(contact);
    }
    return contact;
  }

  async create(data) {
    const {
      fullname,
      phone,
      email,
      address,
    } = data;
    const dataDao = {
      firts_name: fullname.split(' ')[0],
      last_name: fullname.split(' ')[1],
      phone,
      email,
      address,
    };
    const contact = await this.dao.create(dataDao);
    return new ContactDto(contact);
  }

  updateById(uid, data) {
    const {
      fullname,
      phone,
      email,
      address,
    } = data;
    const dataDao = {};
    if (fullname) {
      dataDao.firts_name = fullname.split(' ')[0];
      dataDao.last_name = fullname.split(' ')[1];
    }
    if (phone) {
      dataDao.phone = phone;
    }
    if (address) {
      dataDao.address = address;
    }
    if (email) {
      dataDao.email = email;
    }
    return this.dao.updateById(uid, dataDao);
  }

  deleteById(uid) {
    return this.dao.deleteById(uid);
  }
}