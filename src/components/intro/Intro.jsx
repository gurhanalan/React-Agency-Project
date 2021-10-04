import React from "react";
import styled from "styled-components";
import woman from "../../img/womancellphone.png";
import AnimatedShapes from "../animatedshapes/AnimatedShapes";
import NavBar from "../navbar/NavBar";

const MainContainer = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const MainContainerBg = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 0%, 70% 0%, 50% 58%, 55% 100%, 100% 100%);
    background-color: crimson;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`;

const Container = styled.div`
    height: calc(100vh - 5rem);
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`;
const Right = styled.div`
    flex: 1;
    position: relative;
`;

const Title = styled.h1`
    font-size: 4rem;
    width: 60%;
`;

const Desc = styled.p`
    font-size: 2rem;
    text-align: justify;
    width: 60%;
`;

const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoButton = styled.button`
    border: none;
    background-color: darkblue;
    font-size: 2rem;
    height: 4rem;
    padding: 0 2rem;
    text-transform: uppercase;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
`;

const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;

    font-size: 1.4rem;
`;

const ContactText = styled.span`
    color: gray;
    font-size: 1.4rem;
`;

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
`;

const Intro = () => {
    return (
        <MainContainer>
            <MainContainerBg />
            <AnimatedShapes />
            <NavBar />
            <Container>
                <Left>
                    <Title>Adventures in creative age</Title>
                    <Desc>
                        We believe that designing products and services in close
                        partnership with our clients is the only way to have a
                        real impact on their business.
                    </Desc>
                    <Info>
                        <InfoButton>Start A Project</InfoButton>
                        <InfoText>
                            <Phone>Call Us (012) 345 - 6789</Phone>
                            <ContactText>
                                For any question or concern
                            </ContactText>
                        </InfoText>
                    </Info>
                </Left>
                <Right>
                    <Image src={woman} />
                </Right>
            </Container>
        </MainContainer>
    );
};

export default Intro;
