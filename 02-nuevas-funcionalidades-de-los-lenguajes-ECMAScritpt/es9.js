(function (run) {

  if (!run) return;

  let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@mail.com',
    password: '123456',
    address: 'Calle 123',
    createAt: new Date(),
    birthday: new Date(1985, 5, 10),
  };

  function cloneObject(object) {
    const newObject = {};
    const keys = Object.keys(object);
    keys.forEach((key) => {
      newObject[key] = object[key];
    });
    return newObject;
  }

  function cloneObjectWithSpread(object) {
    return { ...object };
  }

/*   const objectCloned = cloneObjectWithSpread(userData);

  userData.calle = 'Siempre Viva 1234';

  console.log('userData', userData);
  console.log('objectCloned', objectCloned);

  console.log('object cloned', userData === objectCloned); */

})(false);

(function (run) {

  if (!run) return;

  let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@mail.com',
    password: '123456',
    address: 'Calle 123',
    createAt: new Date(),
    birthday: new Date(1985, 5, 10),
  };

  const newUserData = {
    id: 12389,
    ...userData,
    address: 'Calle simpre viva 4242',
    shoppingCar: [],
  };

  console.log(newUserData);

})(false);

(function (run) {

  if (!run) return;

  let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@mail.com',
    password: '123456',
    address: 'Calle 123',
    createAt: new Date(),
    birthday: new Date(1985, 5, 10),
  };

  function fullname(user) {
    let { firstName: nombre, lastName: apellido, ...rest } = user;
    console.log('rest', rest);
    return nombre + ' ' + apellido;
  }

  function filterPassword(user) {
    const {password, ...restUser } = user;
    return restUser;
  }

  console.log('filterPassword', filterPassword(userData));

})(false);

(function (run) {

  if (!run) return;

  let dataset = [5, 6, 7, 8, 9];

  let newDataSet = [0, 1, 2, 3, 4, ...dataset, 10, 11, true, false];

  console.log('newDataSet', newDataSet);

})(false);

(function (run) {

  if (!run) return;

  let dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  let dataset2 = ['Ernesto', 'Rojas', 32, 'Calle simpre viva 132', 'er@email.com'];

  let [,,,cuatro, cinco, ...resto] = dataset;

  let [firstName, lastName, age, address, email] = dataset2;

  console.log(firstName, lastName);

  console.log('cuatro', cuatro);
  console.log('cinco', cinco);
  console.log('resto', resto);

})(true);