let users = [ // Array o lista
  {id: 1, firstName: 'John', lastName: 'Doe', age: 25, skill: 'JavaScript', status: true }, // Objects
  {id: 2, firstName: 'Pedro', lastName: 'Ruíz', age: 32, skill: 'HTML'},
  {id: 3, firstName: 'María', lastName: 'López', age: 28, skill: 'CSS'},
  {id: 4, firstName: 'Mario', lastName: 'Rojas', age: 27, skill: 'React'},
  {id: 5, firstName: 'Martina', lastName: 'San Martin', age: 26, skill: 'Angular'},
];
  
let userId = 10;

function callback(currentUser) {
  console.log('Estamos analizando el usuario con id', currentUser.id);
  return currentUser.id === userId;
}

let user = users.find(callback);

console.log('user', user);