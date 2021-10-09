import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "../minicard/MiniCard";
import girlTablet from "../../img/girl-tablet.png";
import play from "../../img/play.png";
const Container = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    @media only screen and (max-width: 480px) {
        min-height: 100vh;
        height: max-content;
    }
`;

const MainContainerBg = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 33% 0%, 45% 100%, 0 100%);
    background-color: pink;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
`;
const Left = styled.div`
    flex: 1;
    position: relative;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    max-width: 100%;
`;

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    /* height: 30rem; */
    width: 90%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
        width: 100%;
        padding: 3rem 10%;
    }
    @media only screen and (max-width: 480px) {
        padding: 2rem;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const Desc = styled.p`
    font-size: 2rem;
    margin-top: 2rem;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Button = styled.button`
    width: 18rem;
    border: none;
    border-radius: 1rem;
    background-color: darkblue;
    color: white;
    font-size: 2rem;
    padding: 1.5rem;
    margin-top: 5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 2rem;
    margin-right: 1rem;
`;

const Modal = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #00000083;
`;

const ModalBtn = styled.button`
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    position: absolute;
    top: 5rem;
    right: 5rem;
    cursor: pointer;
`;

const Service = () => {
    const [open, setOpen] = useState(false);
    const isSmallScreen = window.screen.width <= 900 ? true : false;
    return (
        <Container>
            <MainContainerBg />
            <Left>
                <Image src={girlTablet} open={open} />
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startups and
                        small businesses to looking for a partner of their
                        digital media, design & development, lead generation and
                        communications requirents. We work with you, not for
                        you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen((prev) => !prev)}>
                        <Icon src={play} />
                        {open ? "Close Video" : "How it works"}
                    </Button>
                </Wrapper>
            </Right>
            {isSmallScreen && open && (
                <Modal>
                    <Video
                        open={open}
                        autoPlay
                        loop
                        controls
                        src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    />
                    <ModalBtn onClick={() => setOpen((prev) => !prev)}>
                        Close
                    </ModalBtn>
                </Modal>
            )}
        </Container>
    );
};

export default Service;
