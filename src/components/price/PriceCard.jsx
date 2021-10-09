import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    padding: 5rem;
    gap: 3rem;
    background-color: white;
`;
const PriceContainer = styled.p`
    font-size: 2rem;
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-size: 4rem;
    font-weight: bold;
`;

const Type = styled.button`
    border-radius: 1rem;
    border-color: crimson;
    color: crimson;
    padding: 1rem;
    background-color: white;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const ListItem = styled.li`
    font-size: 1.6rem;
`;

const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
`;
const PriceCard = ({ price, type }) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>{" "}
            </List>
            <Button>Join Now</Button>
        </Container>
    );
};

export default PriceCard;
