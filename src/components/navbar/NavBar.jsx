import React from "react";
import styled from "styled-components";
import AnimatedShapes from "../animatedshapes/AnimatedShapes";

const Container = styled.div`
    height: 5rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-decoration: underline solid crimson;
    margin-left: 3rem;
`;
const Wrapper = styled.div`
    width: 60%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 50%;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 850px) {
        display: none;
    }
`;

const MenuItem = styled.a`
    text-decoration: none;
    color: grey;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 2rem;
`;

const Button = styled.button`
    background-color: crimson;
    border: 2px solid white;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin-right: 3rem;
    font-size: 1.6rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>Agency</Logo>

                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Wrapper>
            <Button>Join Today</Button>
        </Container>
    );
};

export default NavBar;
