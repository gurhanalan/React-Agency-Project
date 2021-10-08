import React from "react";
import styled from "styled-components";
import search from "../../img/search.png";
const Container = styled.div`
    width: clamp(12rem, 30%, 30rem);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    gap: 2rem;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Icon = styled.img`
    width: 2rem;
`;

const Text = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;
const MiniCard = () => {
    return (
        <Container>
            <Icon src={search} />
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
        </Container>
    );
};

export default MiniCard;
