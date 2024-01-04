import ToyModel from './models/toy.model.js';

export default class ToyDaoMongoDB {
  static getAll(criteria = {}) {
    return ToyModel.find(criteria);
  }

  static create(data) {
    return ToyModel.create(data);W
  }

  static updateById(tid, data) {
    return ToyModel.updateOne({ _id: tid }, { $set: data });
  }

  static deleteById(tid) {
    return ToyModel.deleteOne({ _id: tid });
  }
}