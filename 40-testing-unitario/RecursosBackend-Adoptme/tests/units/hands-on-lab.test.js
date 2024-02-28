import { expect } from 'chai';

import {
  createHash,
  passwordValidation,
} from '../../src/utils/index.js';

import UserDTO from '../../src/dto/User.dto.js';

describe('Pruebas de utilidades', function() {
  it('Deberia hashear la contraseña correctamente', async function() {
    const password = 'qwerty';
    const result =  await createHash(password);
    expect(result).to.be.not.equals(password);
  });

  it('Deberia validar la contraseña correctamente', async function() {
    const password = 'qwerty';
    const passwordHashed =  await createHash(password);
    const userMock = { password: passwordHashed};
    const result = await passwordValidation(userMock, password);
    expect(result).to.be.ok;
  });

  it('Deberia validar la contraseña invalida correctamente', async function() {
    const password = 'qwerty';
    const passwordHashed =  await createHash(password);
    const userMock = { password: passwordHashed};
    const result = await passwordValidation(userMock, 'asdfgh');
    expect(result).to.be.not.ok;
  });

  it('Deberia crear un DTO correctamente', () => {
    const dataMock = {
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    };
    const user = UserDTO.getUserTokenFrom(dataMock);
    expect(user).to.be.has.property('name', 'Jose Rojas');
    expect(user).to.be.not.has.property('last_name');
    expect(user).to.be.not.has.property('password');
  });

});