import React from "react";
import styled, { css } from "styled-components";
import map from "../../img/map.png";
import phone from "../../img/phone.png";
import send from "../../img/send.png";
const Container = styled.div`
    /* min-height: 90vh; */
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    display: flex;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const HalfOfScreen = css`
    flex: 1;

    padding: 5rem 5%;
    @media only screen and (max-width: 700px) {
        padding: 2rem 5%;
    }
`;
const Left = styled.div`
    ${HalfOfScreen}
`;

const Title = styled.h2`
    font-size: 3rem;
    text-transform: capitalize;
    margin-bottom: 3rem;
`;

const Form = styled.form`
    display: flex;
    gap: 3rem;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const LeftForm = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    gap: 3rem;
`;
const RightForm = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
`;

const Input = styled.input`
    padding: 1rem;

    outline-color: crimson;
`;

const TextArea = styled.textarea`
    padding: 1rem;
    outline-color: crimson;
    height: 50%;
`;
const Button = styled.button`
    background-color: darkblue;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    border: none;
`;
const Right = styled.div`
    ${HalfOfScreen}

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
`;
const Text = styled.p`
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    gap: 3rem;
`;
const Icon = styled.img`
    height: 3rem;
`;

const Contact = () => {
    return (
        <Container>
            <Left>
                <Title>
                    Questions? <br />
                    Let's get in touch
                </Title>
                <Form>
                    <LeftForm>
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input type="text" placeholder="Subject" />
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="Your Message" />
                        <Button>Send</Button>
                    </RightForm>
                </Form>
            </Left>
            <Right>
                <Text>
                    <Icon src={map} /> 123 Park Avenue, New York, USA
                </Text>
                <Text>
                    <Icon src={phone} />
                    +1 231 233 43 43 +1 333 322 23 23
                </Text>
                <Text>
                    <Icon src={send} />
                    contact@alan.dev sales@alan.dev
                </Text>
            </Right>
        </Container>
    );
};

export default Contact;
