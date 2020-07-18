import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React from "react";
import { isArray } from "util";
import { Customer, Loading } from "../components";
import { customerList } from "./__generated__/customerList";

const GET_CUSTOMERS = gql`
    query customerList($cursor: Int) {
        customers(cursor: $cursor) {
            id
            name
            email
            addresses {
                id
                streetAddress
                city
                state
                country
            }
        }
    }
`;

interface CustomersProps extends RouteComponentProps {}

const Customers: React.FC<CustomersProps> = () => {
    const { data, loading, error } = useQuery<customerList>(GET_CUSTOMERS);

    if (loading) return <Loading />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            {isArray(data?.customers) &&
                data.customers.map((customer: any) => <Customer key={customer.id} data={customer} />)}
        </>
    );
};

export default Customers;
