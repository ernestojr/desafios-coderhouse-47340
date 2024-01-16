import UserModel from './models/user.model.js';

export default class UserMongoDbDao {
  static get(criteria = {}, opts = {}) {
    return UserModel.find(criteria);
  }

  static getById(uid) {
    return UserModel.findById(uid);
  }

  static create(data) {
    return UserModel.create(data);
  }

  static updateById(uid, data) {
    const criteria = { _id: uid };
    const operation = { $set: data };
    return UserModel.updateOne(criteria, operation);
  }

  static deleteById(uid) {
    const criteria = { _id: uid };
    return UserModel.deleteOne(criteria);
  }
}