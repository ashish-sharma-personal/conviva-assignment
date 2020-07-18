import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React from "react";
import { Address, Loading } from "../components";
import { customerList, customerList_customers } from "./__generated__/customerList";

export const GET_CUSTOMER_ADDRESSES = gql`
    query customerList($cursor: Int) {
        customers(cursor: $cursor) {
            id
            name
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

interface LaunchProps extends RouteComponentProps {
    customerId?: string;
}

const Addresses: React.FC<LaunchProps> = ({ customerId }) => {
    const { data, loading, error } = useQuery<customerList>(GET_CUSTOMER_ADDRESSES);

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    const customerData = data?.customers?.find(
        (customer: customerList_customers | null) => customer?.id === customerId
    );

    return (
        <>
            <h3 style={{ marginBottom: 20 }}>
                {customerData?.addresses?.[0]
                    ? `${customerData?.name}'s addresses:`
                    : `${customerData?.name} has no addresses`}
            </h3>
            {customerData?.addresses?.map((address: any) => (
                <Address {...address} />
            ))}
        </>
    );
};

export default Addresses;
