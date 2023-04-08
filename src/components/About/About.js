import React from 'react'
import styled from 'styled-components';
import AboutCard from '../Cards/AboutCard';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";


const AboutContainer = styled.div`
    padding: 0 0rem 0 0rem;
    display: flex;
    height: 70vh;
    margin-top: 15rem;
    margin-bottom: 13rem;
    ${tablet({ flexDirection: "column", marginTop: "10rem", marginBottom: "8rem"})};
    ${mobile ({ height: "100%"})};
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ flexDirection: "column"})};
`;

const Left = styled.div`
    padding: 0 12rem 0 6rem;
    display: flex;
    flex-direction: column;
    position: relative;
    ${mobile ({ padding: "0 2rem 0 2rem"})};
`;

const Title = styled.div`
    margin-bottom: 2rem;
    ${mobile ({ marginBottom: "1rem"})};
    

    &.title {
        margin-left: 0rem;
        ${mobile ({ textAlign: "center"})};
       
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
        ${mobile ({ display: "none"})};
        
    }
`;

const Text = styled.div`
    width: 350px;
    margin-bottom: 2rem;
    ${mobile ({ textAlign: "center", width: "350px", padding: "0 3rem 0 1rem", marginBottom: "1rem"})};
    
    span {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.1;
        letter-spacing: 2px;
        ${mobile ({ fontSize: "2rem"})};
    }
`;

const P = styled.div`
    width: 420px;
    ${mobile ({ textAlign: "center", width: "350px", padding: "0 3rem 0 1rem"})};

    span {
        color: var( --color-light);
    }
`;

const Right = styled.div`
    position: relative;
    margin-top: 3rem;
    ${tablet({ margin: "3rem 6rem 0rem 6rem"})};
    ${mobile ({ display: "flex", flexDirection: "column", gap: "15rem", margin: "2rem 1rem 2rem 2.5rem"})};
    &>* {
        position: absolute;
        ${mobile ({ position: "static"})};
       
    }
   
`;

const RightContainer = styled.div`
    
`;

const Btn = styled.div`
    ${mobile ({ alignItems: "center", justifyContent: "center", textAlign: "center", display: "flex"})};
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: var(--color-bg-variant);
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
`;


const About = () => {
  return (
    <AboutContainer>
        <Split>
        <Left>
        <Title className='title'> About Us </Title>
            <Text> <span>What makes us stand out </span></Text>
            <P>
            <span> Our services help you create digital products and solve</span>
            <span> your problems objectively,strategically and technologicaly.</span>
            <span> Our service also has a high appeal because it has</span>
            <span> a beautiful color combination and a minimalist concept.</span>
            </P>
            <Btn> <Button> Learn More </Button> </Btn>
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
        </Split>
    </AboutContainer>
  )
}

export default About