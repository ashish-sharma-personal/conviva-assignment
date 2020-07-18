module.exports = {
    Query: {
        customers: async (_, {}, { dataSources }) => {
            try {
                const allCustomers = await dataSources.customersAPI.getAllCustomers();
                return allCustomers;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
