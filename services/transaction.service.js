const faker = require('faker');

class TransactionsService {
  constructor() {
    this.transactions = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    let counter = 0;
    while (counter < limit) {
      let quantity = faker.datatype.number({ min: 10, max: 50 });
      let price = faker.commerce.price();
      this.transactions.push({
        id: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        price,
        material: faker.commerce.productMaterial(),
        quantity,
        total: quantity * price,
      });
      counter++;
    }
  }

  list() {
    return this.transactions;
  }
}

module.exports = TransactionsService;
