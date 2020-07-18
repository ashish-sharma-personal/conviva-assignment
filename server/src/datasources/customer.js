const { DataSource } = require("apollo-datasource");
const faker = require("faker");

const allCustomers = Array.from(new Array(20)).map(() => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    addresses: Array.from(new Array(Math.floor(Math.random() * 10))).map(() => ({
        id: faker.random.uuid(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
    })),
}));

class CustomerAPI extends DataSource {
    initialize(config) {
        this.context = config.context;
    }

    async getAllCustomers() {
        return allCustomers;
    }
}

module.exports = CustomerAPI;
