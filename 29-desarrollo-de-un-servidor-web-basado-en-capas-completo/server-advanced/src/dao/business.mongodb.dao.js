import BusinessModel from './models/business.model.js';

export default class businessMongoDbDao {
  static get(criteria = {}, opts = {}) {
    return BusinessModel.find(criteria);
  }

  static getById(uid) {
    return BusinessModel.findById(uid);
  }

  static create(data) {
    return BusinessModel.create(data);
  }

  static updateById(uid, data) {
    const criteria = { _id: uid };
    const operation = { $set: data };
    return BusinessModel.updateOne(criteria, operation);
  }

  static deleteById(uid) {
    const criteria = { _id: uid };
    return BusinessModel.deleteOne(criteria);
  }
}