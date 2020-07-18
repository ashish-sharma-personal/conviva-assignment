const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        customers(cursor: Int): [Customer]!
    }
    type Customer {
        id: ID!
        name: String
        email: String
        addresses: [Address]
    }
    type Address {
        id: ID!
        streetAddress: String
        city: String
        state: String
        country: String
    }
`;

module.exports = typeDefs;
