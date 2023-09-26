(function (run) {
  if (!run) return;
  let setData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  let positionDefault = 5;
  let position = 0;
  console.log('OR', setData[position || positionDefault]);
  console.log('Nullish', setData[position ?? positionDefault]);
})(false);

(function (run) {
  if (!run) return;
  class Person {
    #fullname;
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.#fullname = `${this.firstname} ${this.lastname}`;
    }
    getFullname() {
      this.#privateMethod();
      return this.#fullname;
    }

    #privateMethod() {
      console.log('privateMethod called');
    }
  }

  let person = new Person('Juan', 'Perez');
  console.log('person', person.getFullname());
})(false);