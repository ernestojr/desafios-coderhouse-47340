import ContactModel from './models/contact.model.js';

export default class ContactDao {
  get(filters = {}, opts = {}) {
    return ContactModel.find(filters);
  }

  create(data) {
    return ContactModel.create(data);
  }

  getById(uid) {
    return ContactModel.findById(uid);
  }

  updateById(uid, data) {
    return ContactModel.updateOne({ _id: uid }, { $set: data });
  }

  deleteById(uid) {
    return ContactModel.deleteOne({ _id: uid });
  }
}