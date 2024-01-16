import OrderModel from './models/order.model.js';

export default class OrderMongoDbDao {
  static get(criteria = {}, opts = {}) {
    return OrderModel.find(criteria);
  }

  static getById(uid) {
    return OrderModel.findById(uid);
  }

  static create(data) {
    return OrderModel.create(data);
  }

  static updateById(uid, data) {
    const criteria = { _id: uid };
    const operation = { $set: data };
    return OrderModel.updateOne(criteria, operation);
  }

  static deleteById(uid) {
    const criteria = { _id: uid };
    return OrderModel.deleteOne(criteria);
  }
}