import mongoose from 'mongoose';
import { expect } from 'chai';

import UserDao from '../../src/dao/Users.dao.js';

describe('Pruebas al modulo de user dao usando chai.', function() {
  before(async function() {
    await mongoose.connect('mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/adoptme-test');
    this.userDao = new UserDao();
  });

  beforeEach(async function () {
    await mongoose.connection.collections.users.drop();
  });

  after(async function () {
    await mongoose.connection.close();
  });

  it('Deberia obtener la lista de usuarios vacia', async function() {
    const result = await this.userDao.get();
    expect(result).to.be.deep.equal([]);
    expect(Array.isArray(result)).to.be.ok;
    expect(Array.isArray(result)).to.be.equal(true);
  });

  it.only('Deberia crear un usuario correctamente.', async function() {
    const user = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });
    expect(user).to.be.ok;
    expect(user).to.be.has.property('role', 'user');
    expect(user).to.be.has.property('pets');
    expect(user.pets).to.be.deep.equal([]);
    expect(user).to.be.has.property('email', 'jr@mail.com');
    expect(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test('jr@mail.com')).to.be.ok;
  });

  it('Deberia obtener el usuario por su correo', async function() {
    await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });
    const user = await this.userDao.getBy({ email: 'jr@mail.com' });
    expect(user).to.be.ok;
    expect(typeof user).to.be.equal('object');
  });

  it('Deberia actualizar un usuario correctamente', async function() {
    let user = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });
    await this.userDao.update(user._id, {  first_name: 'Jose Luis' });
    user = await this.userDao.getBy({ email: 'jr@mail.com' });
    expect(user).to.be.ok;
    expect(user.first_name).to.be.equal('Jose Luis');
  });

  it('Deberia eliminar un usuario correctamente', async function() {
    let user = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });
    await this.userDao.delete(user._id);
    user = await this.userDao.getBy({ email: 'jr@mail.com' });
    expect(user).to.be.not.ok;
  });

});
