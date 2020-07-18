const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const CustomerAPI = require("./datasources/customer");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        customersAPI: new CustomerAPI(),
    }),
    context: async ({ req }) => {
        return req.headers;
    },
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
