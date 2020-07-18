import { Link } from "@reach/router";
import React from "react";
import styled, { css } from "react-emotion";
import { customerList_customers } from "../pages/__generated__/customerList";
import { unit } from "../styles";

export default ({ data: { id, name, email } }: { data: customerList_customers }) => {
    return (
        <StyledLink to={`/addresses/${id}`}>
            <h3>{name}</h3>
            <h5>{email}</h5>
        </StyledLink>
    );
};

export const cardClassName = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: `${unit * 4}px ${unit * 5}px`,
    borderRadius: 7,
    color: "white",
    backgroundColor: "darkslategrey",
    backgroundSize: "cover",
    backgroundPosition: "center",
});

const padding = unit;
const StyledLink = styled(Link)(cardClassName, {
    height: 193,
    marginTop: padding,
    textDecoration: "none",
    ":not(:last-child)": {
        marginBottom: padding * 2,
    },
});
