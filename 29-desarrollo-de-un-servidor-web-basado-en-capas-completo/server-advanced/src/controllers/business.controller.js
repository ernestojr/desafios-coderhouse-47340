import BusinessDao from '../dao/business.mongodb.dao.js';

export default class BusinessController {
  static async get(filter = {}, opts = {}) {
    const business = await BusinessDao.get(filter, opts);
    console.log(`Negocios encontrados: ${business.length} 😎`);
    return business;
  }

  static async getById(bid) {
    const business = await BusinessDao.getById(bid);
    if (business) {
      console.log(`Se encontro el negocio exitosamente ${JSON.stringify(business)} 😎`);
    }
    return business;
  }

  static async create(data) {
    const business = await BusinessDao.create(data);
    console.log(`Negocios creado exitosamente: ${JSON.stringify(business)} 😎`);
    return business;
  }

  static async addProduct(bid, product) { // { id: 1, name: 'pizza', price: 12.34 }
    const newProduct = {
      name: product.name,
      price: product.price,
    };
    const business = await BusinessDao.getById(bid);
    if (business) {
      const { products } = business;
      products.push({ id: products.length + 1, ...newProduct });
      await BusinessDao.updateById(bid, { products });
    }
  }
}