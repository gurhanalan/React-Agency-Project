import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
    padding: 3rem 0;
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: space-evenly;
    position: relative;
    gap: 3rem;
    @media only screen and (max-width: 700px) {
        flex-wrap: wrap;
    }
`;

const MainContainerBg = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(45% 0, 100% 0%, 100% 100%, 70% 100%);
    background-color: crimson;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
`;

const Price = () => {
    return (
        <Container>
            <PriceCard price="10" type="Basic" />
            <PriceCard price="20" type="Advanced" />
            <PriceCard price="30" type="Premium" />
            <MainContainerBg />
        </Container>
    );
};

export default Price;
