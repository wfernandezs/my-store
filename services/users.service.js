const faker = require('faker');
const boom = require('@hapi/boom');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    let limit = 50;
    let n = 0;
    while (n <= limit) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        phone: faker.phone.phoneNumber(),
        company: faker.company.companyName(),
      });
      n++;
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.users.push(newUser);
    return newUser;
  }

  async list() {
    return await this.users;
  }

  async findOne(id) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }

  async update(id, changes) {
    const index = this.users.find((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.userss[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.find((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;
