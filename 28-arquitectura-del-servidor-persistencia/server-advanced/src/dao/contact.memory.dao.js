
export default class ContactDao {

  constructor() {
    this.contacts = [
      {
        id: 1,
        firts_name: 'Juan',
        last_name: 'Ruiz',
        phone: '1234567890',
        email: 'jr@mail.com',
      },
    ];
  }

  get(filters = {}, opts = {}) {
    return this.contacts;
  }

  create(data) {
    const newContact = {
      ...data,
      id: this.contacts.length + 1,
    };
    this.contacts.push(newContact);
    return Promise.resolve(newContact);
  }

  getById(uid) {
    const index = this.contacts.findIndex(c => c.id === parseInt(uid));
    return this.contacts[index];
  }

  updateById(uid, data) {
    const index = this.contacts.findIndex(c => c.id === parseInt(uid));
    this.contacts[index] = {
      ...this.contacts[index],
      ...data,
      id: paseInt(uid),
    };
    return this.contacts[index];
  }

  deleteById(uid) {
    const index = this.contacts.findIndex(c => c.id === parseInt(uid));
    const result = this.contacts.splice(index, 1);
    return result;
  }
}