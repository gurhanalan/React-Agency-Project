import React from "react";
import styled from "styled-components";

const Square = styled.div`
    height: 6rem;
    width: 6rem;
    opacity: 0.7;
    background-color: #4e6bff;
    position: absolute;
    top: 0;
    left: -6rem;
    animation: square 25s linear alternate infinite;
    z-index: -2;

    @keyframes square {
        to {
            transform: translate(100vw, 100vh);
        }
    }
`;

const Circle = styled.div`
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    opacity: 0.7;
    background-color: #ff97af;
    position: absolute;
    top: 20rem;
    left: -10rem;
    animation: circle 22s linear alternate infinite;
    z-index: -2;

    @keyframes circle {
        to {
            transform: translate(100vw, -10vh);
        }
    }
`;
const Rectangle = styled.div`
    height: 10rem;
    width: 5rem;
    /* border-radius: 50%; */
    opacity: 0.7;
    background-color: #669966;
    position: absolute;
    top: 20rem;
    left: -10rem;
    animation: rect 20s linear alternate infinite;
    z-index: -2;

    @keyframes rect {
        to {
            transform: translate(100vw, 50vh);
        }
    }
`;

const AnimatedShapes = () => {
    return (
        <>
            <Square />
            <Circle />
            <Rectangle />
        </>
    );
};

export default AnimatedShapes;
