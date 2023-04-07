import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    position: relative;
    
`;


const Card = styled.div`
    width: 10rem;
    height: 12rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 10rem;
    text-align: center;
    background: var(--color-primary);
    padding: 0px 26px 2rem 26px; 

    span {
        margin-top: 2rem;
        font-size: 50px;
        font-weight: bold;
    }

    p {
        font-size: 14px;
    }
`;

const Shadow = styled.div`
    position: absolute;
    width: 10rem;
    height: 11rem;
    right: -9.5rem;
    top: 1.5rem;
    background: #121212
`;


const AboutCard = ({number, heading}) => {
  return (
    <CardContainer>
        <Shadow>

        </Shadow>
        <Card>
            <span> {number} </span>
            <p> {heading} </p>
        </Card>
    </CardContainer>
  )
}

export default AboutCard