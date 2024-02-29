import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Adopme Testing', function () {
  describe('Pets Testing', function () {

    it('deberia crear una mascota de forma exitosa.', async function() {
      const petMock = {
        name: 'Patitas',
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const { statusCode, ok, _body } = await requester
        .post('/api/pets')
        .send(petMock);

      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('adopted', false);
    });

    it('deberia fallar si no se ingresan los datos completos.', async function() {
      const petMock = {
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const { statusCode, ok, _body } = await requester
        .post('/api/pets')
        .send(petMock);
      expect(statusCode).to.be.equal(400);
      expect(ok).to.be.not.ok;
      expect(_body).to.be.has.property('status', 'error');
      expect(_body).to.be.has.property('error', 'Incomplete values');
    });

    it('deberia obtener la lista de mascotas de forma exitosa.', async function() {
      const {  statusCode, ok, _body  } = await requester.get('/api/pets');
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status');
      expect(_body).to.be.has.property('payload');
      expect(Array.isArray(_body.payload)).to.be.equal(true);
    });

    it('deberia actualizar una mascota de forma exitosa.', async function() {
      const petMock = {
        name: 'Minino',
        specie: 'Gato',
        birthDate: '04-02-2024',
      };
      const { _body: { payload: { _id } } } = await requester
        .post('/api/pets')
        .send(petMock);
      const { statusCode, ok, _body } = await requester
        .put(`/api/pets/${_id}`)
        .send({ specie: 'Canino' });
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('message', 'pet updated');
    });

    it('deberia eliminar una mascota de forma exitosa.', async function() {
      const petMock = {
        name: 'Minino',
        specie: 'Gato',
        birthDate: '04-02-2024',
      };
      const { _body: { payload: { _id } } } = await requester
        .post('/api/pets')
        .send(petMock);
      const { statusCode, ok, _body } = await requester
        .delete(`/api/pets/${_id}`);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('message', 'pet deleted');
    });

    it('deberia crear una mascota con su imagen.', async function() {
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/pets/withimage')
        .field('name', 'Patitas')
        .field('specie', 'Pez')
        .field('birthDate', '01-02-2024')
        .attach('image', './tests/integrations/cat.gif');
      
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('adopted', false);
    });
  });
  describe('Auth Testing', function () {
    before(function (){
      this.cookie = {};
      this.email = '';
    });
    it('deberia registrarse el usuario de forma exitosa', async function () {
      this.email = `ernesto${Date.now()/1000}@gmail.com`;
      const userMock ={
        first_name: 'Ernesto',
        last_name: 'Rojas',
        email: this.email,
        password: 'qwerty',
      };
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/sessions/register').send(userMock);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
    });
    it('deberia loguearse el usuario de forma exitosa', async function () {

      const userMock ={
        email: this.email,
        password: 'qwerty',
      };
      const {
        headers,
        statusCode,
        ok,
      } = await requester.post('/api/sessions/login').send(userMock);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      const [key, value] = headers['set-cookie'][0].split('=');
      this.cookie.key = key;
      this.cookie.value = value;
    });
    it('deberia obtener su informacion el usuario de forma exitosa', async function () {
      const {
        statusCode,
        ok,
        _body,
      } = await requester
        .get('/api/sessions/current')
        .set('Cookie', [`${this.cookie.key}=${this.cookie.value}`]);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('email', this.email);
    });
  });
});