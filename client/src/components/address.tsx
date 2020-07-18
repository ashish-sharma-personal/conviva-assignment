import React from "react";
import styled from "react-emotion";
import { customerList_customers_addresses } from "../pages/__generated__/customerList";
import { unit } from "../styles";
import { cardClassName } from "./customer-tile";

const Address: React.FC<customerList_customers_addresses> = ({ streetAddress, city, state, country }) => (
    <Card>
        <Row>
            <h5>{"Street address:  "}</h5>
            <h5>{streetAddress}</h5>
        </Row>
        <Row>
            <h5>{"City:  "}</h5>
            <h5>{city}</h5>
        </Row>
        <Row>
            <h5>{"State:  "}</h5>
            <h5>{state}</h5>
        </Row>
        <Row>
            <h5>{"Country:  "}</h5>
            <h5>{country}</h5>
        </Row>
    </Card>
);

const Card = styled("section")(cardClassName, {
    height: 365,
    marginBottom: unit * 4,
});

const Row = styled("section")({
    display: "flex",
    alignItems: "center",
});

export default Address;
