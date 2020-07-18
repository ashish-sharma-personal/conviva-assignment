/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: customerList
// ====================================================

export interface customerList_customers_addresses {
  __typename: "Address";
  id: string;
  streetAddress: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
}

export interface customerList_customers {
  __typename: "Customer";
  id: string;
  name: string | null;
  email: string | null;
  addresses: (customerList_customers_addresses | null)[] | null;
}

export interface customerList {
  customers: (customerList_customers | null)[];
}

export interface customerListVariables {
  cursor?: number | null;
}
