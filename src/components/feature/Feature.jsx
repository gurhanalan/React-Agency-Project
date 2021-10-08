import React from "react";
import phone from "../../img/handscellphone.png";
import styled from "styled-components";
import AnimatedShapes from "../animatedshapes/AnimatedShapes";

const Container = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
`;

const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

const Image = styled.img`
    /* width: 80%; */
    height: 100%;
    max-width: 100%;
    /* max-height: 100%; */
    object-fit: cover;
    position: absolute;
    bottom: 0;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        width: 100%;
        padding: 3rem 10%;
    }
`;

const Title = styled.span`
    font-size: 7rem;
    @media only screen and (max-width: 480px) {
        font-size: 5rem;
    }
`;

const SubTitle = styled.span`
    font-size: 2.5rem;
    font-style: italic;
    color: #333;
    margin-top: 3rem;
`;

const Desc = styled.p`
    font-size: 2rem;
    color: #777;
    margin-top: 3rem;
`;

const Button = styled.button`
    width: 15rem;
    border: none;
    padding: 1.5rem 2rem;
    background-color: darkblue;
    color: white;
    font-size: 2rem;
    border-radius: 2rem;
    margin-top: 2rem;
    cursor: pointer;
`;

const MainContainerBg = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: #f88497;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
`;
const Feature = () => {
    return (
        <Container>
            <AnimatedShapes />
            <MainContainerBg />
            <Left>
                <Image src={phone} />
            </Left>
            <Right>
                <Title>
                    <b>good</b> design
                    <br />
                    <b>good</b> business
                </Title>
                <SubTitle>
                    We know that good design means good business.
                </SubTitle>
                <Desc>
                    We help our clients succeed by creating brand identities,
                    digital experiences, and print materials that communicate
                    clearly, achieve marketing goals, and look fantastic.
                </Desc>
                <Desc>
                    We care your business and guarantee you to achieve marketing
                    goals.
                </Desc>
                <Button>Learn More</Button>
            </Right>
        </Container>
    );
};

export default Feature;
