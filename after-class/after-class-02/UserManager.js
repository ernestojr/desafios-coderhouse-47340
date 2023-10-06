const fs = require('fs'); // Common JS

class UserManager {
  constructor(path) {
    this.path = path;
  }

  async create(data) {
    const { firstName, lastName, age, cours } = data;
    if (!firstName || !lastName || !age || !cours) {
      throw new Error('Todos los campos son requeridos 🎯');
    }
    // Leer el archivo
    const users = await getJsonFromFile(this.path);
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      age,
      cours,
    };
    // inyectar el nuevo usurio
    users.push(newUser);
    // escribir los usuarios en el archivo
    await saveJsonInFile(this.path, users);
    console.log('El usuario se creo correctamente 😎');
  }

  get() {
    return getJsonFromFile(this.path);
  }

  async update(id, data) {
    const { firstName, lastName, age, cours } = data;
    const users = await getJsonFromFile(this.path);
    const position = users.findIndex((u) => u.id === id);
    if (position === -1) {
      throw new Error('Usuario no encontrado 😨');
    }
    if (firstName) {
      users[position].firstName = firstName;
    }
    if (lastName) {
      users[position].lastName = lastName;
    }
    if (age) {
      users[position].age = age;
    }
    if (cours) {
      users[position].cours = cours;
    }
    await saveJsonInFile(this.path, users);
    console.log('Usuario actualido con exito 😎');
  }
}

const getJsonFromFile = async (path) => {
  if (!fs.existsSync(path)) {
    return [];
  }
  const content = await fs.promises.readFile(path, 'utf-8');
  return JSON.parse(content);
};

const saveJsonInFile = (path, data) => {
  const content = JSON.stringify(data, null, '\t');
  return fs.promises.writeFile(path, content, 'utf-8');
}

async function test() {

  const userManager = new UserManager('./Users.json');
  const data = {
    firstName: 'Ernesto',
    lastName: 'Rojas',
    age: 32,
    cours: 'Backend',
  };
  await userManager.create(data);
  console.log(await userManager.get());
  await userManager.update(1, { cours: 'Backend | Frontend' });
  console.log(await userManager.get());
}

test();