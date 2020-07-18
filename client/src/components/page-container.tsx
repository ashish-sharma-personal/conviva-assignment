import React from "react";
import styled from "react-emotion";
import { colors, unit } from "../styles";

export default function PageContainer(props: any) {
    return (
        <>
            <Bar />
            <Container>{props.children}</Container>
        </>
    );
}

const Bar = styled("div")({
    flexShrink: 0,
    height: 30,
    backgroundColor: colors.primary,
});

const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
    padding: unit * 3,
    paddingBottom: unit * 5,
});
