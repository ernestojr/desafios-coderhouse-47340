import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Authentication testing', function () {
  it('debe registart un usuario correctamente', async function () {
    this.email = `jm${Date.now()/1000}@mail.com`;
    this.password = Date.now().toString();
    const userMock = {
      first_name: 'Jose',
      last_name: 'Miranda',
      email: this.email,
      password: this.password,
      birthdate: '12-03-1991',
    };
    const {
      statusCode,
      ok,
      _body,
    } = await requester
      .post('/api/auth/register')
      .send(userMock);
    expect(statusCode).to.be.equals(201);
    expect(ok).to.be.ok;
    expect(_body).to.be.has.property('id');
    expect(_body).to.be.has.property('role', 'user');
  });

  it('debe loguearse un usuario correctamente', async function () {
    const userMock = {
      email: this.email,
      password: this.password,
    };
    const {
      headers,
      statusCode,
      ok,
      _body,
    } = await requester
      .post('/api/auth/login')
      .send(userMock);
    expect(statusCode).to.be.equals(200);
    expect(ok).to.be.ok;
    expect(_body).to.be.has.property('message', 'Logged in successfully 🎉.');
    this.cookie = headers['set-cookie'][0];
  });

  it('debe obtenerse el usuario actualmente logueado correctamente', async function () {
    const {
      statusCode,
      ok,
      _body,
    } = await requester
      .get('/api/auth/current')
      .set('Cookie', [this.cookie]);
    expect(statusCode).to.be.equals(200);
    expect(ok).to.be.ok;
  });

});
