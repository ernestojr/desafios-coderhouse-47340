class User {

  static count = 0; // Atributo estatico o de la clase

  static getCounter () { // Metodo estatico o de la clase
    return User.count;
  }

  constructor(firstName, lastName, age, address) {
    this.firstName = firstName; // atributos de instancia 
    this.lastName = lastName;
    this.age = age;
    this.address = address;

    User.count++;
  }

  getFullName() { // metodos de instancia
    return `${this.firstName} ${this.lastName}`;
  }

  incrementAge() { // metodos de instancia
    this.age++;
  }

  getAge() { // metodos de instancia
    return this.age;
  }
}

const userOne = new User('Luis', 'Ruiz', 23);
const userTwo = new User('Pedro', 'Ruiz', 32);
const userThree = new User('Julieta', 'Ruiz', 13);

console.log('userOne', userOne.getFullName());
userOne.incrementAge();
console.log('userOne', userOne.getAge());

console.log('userTwo', userTwo.getFullName());
userTwo.incrementAge();
console.log('userTwo', userTwo.getAge());

console.log(User.getCounter())