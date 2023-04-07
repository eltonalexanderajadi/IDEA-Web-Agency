import React from 'react'
import styled from 'styled-components';
import AboutCard from '../Cards/AboutCard';

const AboutContainer = styled.div`
    padding: 0 0rem 0 0rem;
    display: flex;
    height: 70vh;
    margin-bottom: 8rem;
    margin-top: 15rem;
    margin-bottom: 13rem;
`;



const Left = styled.div`
    padding: 0 12rem 0 6rem;
    display: flex;
    flex-direction: column;
    position: relative;

`;

const Title = styled.div`
    margin-bottom: 2rem;

    &.title {
        margin-left: 0rem;
    }

    &.title:before {
        content: '';
        display: block;
        width: 90px;
        height: 2px;
        background: var(--color-primary);
        left: 0;
        top: 2%;
        position: absolute;
        
    }
`;

const Text = styled.div`
    width: 350px;
    margin-bottom: 2rem;
    
    span {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.1;
        letter-spacing: 2px;
    }
`;

const P = styled.div`
    width: 420px;

    span {
        color: var( --color-light);
    }
`;

const Right = styled.div`
    position: relative;
    &>* {
        position: absolute;
    }
`;

const RightContainer = styled.div`
    
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: var(--color-bg-variant);
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    margin-top: 1rem;
`;


const About = () => {
  return (
    <AboutContainer>
        
        <Left>
        <Title className='title'> About Us </Title>
            <Text> <span>What makes us stand out </span></Text>
            <P>
            <span> Our services help you create digital products and solve</span>
            <span> your problems objectively,strategically and technologicaly.</span>
            <span> Our service also has a high appeal because it has</span>
            <span> a beautiful color combination and a minimalist concept.</span>
            </P>
            <Button> Learn More </Button>
        </Left>
        <Right>
           <RightContainer style={{left: "20rem"}}>
                <AboutCard 
                number = {'10+'}
                heading = {'Projects Completed'}
                />
           </RightContainer>

           <RightContainer style={{top: "12rem", left: "4rem"}}>
                <AboutCard 
                number = {'10+'}
                heading = {'Projects Completed'}
                />
           </RightContainer>

           <RightContainer style={{top: "19rem", left: "18rem"}}>
                <AboutCard 
                number = {'10+'}
                heading = {'Projects Completed'}
                />
           </RightContainer>
        </Right>
    </AboutContainer>
  )
}

export default About