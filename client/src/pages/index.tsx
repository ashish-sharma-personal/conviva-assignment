import { Router } from "@reach/router";
import React, { Fragment } from "react";
import { PageContainer } from "../components";
import Addresses from "./addresses";
import Customers from "./customers";

export default function Pages() {
    return (
        <Fragment>
            <PageContainer>
                <Router primary={false} component={Fragment}>
                    <Customers path="/" />
                    <Addresses path="addresses/:customerId" />
                </Router>
            </PageContainer>
        </Fragment>
    );
}
