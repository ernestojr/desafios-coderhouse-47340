import UserModel from './models/user.model.js';

export default class UserDaoMongoDB {
  static getAll(criteria = {}) {
    return UserModel.find(criteria);
  }

  static create(data) {
    return UserModel.create(data);W
  }

  static updateById(uid, data) {
    return UserModel.updateOne({ _id: uid }, { $set: data });
  }

  static deleteById(uid) {
    return UserModel.deleteOne({ _id: uid });
  }
}