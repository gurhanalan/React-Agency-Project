import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 5rem;
    background-color: #333;
    color: white;
    font-size: 2rem;

    display: flex;
    justify-content: space-between;
    gap: 3rem;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 3rem;
`;
const ListItem = styled.li``;
const Copyright = styled.span``;
const Footer = () => {
    return (
        <Container>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>API</ListItem>
                <ListItem>Community</ListItem>
            </List>
            <Copyright>Alan Dev Ⓒ</Copyright>
        </Container>
    );
};

export default Footer;
