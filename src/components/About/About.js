import React, { useEffect } from 'react'
import styled from 'styled-components';
import AboutCard from '../Cards/AboutCard';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";
import NumberCounter from 'number-counter';
import Aos from 'aos';
import "aos/dist/aos.css";


const AboutContainer = styled.div`
    padding: 0 0rem 0 0rem;
    display: flex;
    height: 70vh;
    margin-top: 15rem;
    margin-bottom: 13rem;
    ${tablet({ flexDirection: "column", marginTop: "10rem", marginBottom: "8rem"})};
    ${mobile ({ height: "100%", flexDirection: "column", gap: "5rem"})};
`;



const Left = styled.div`
    padding: 0 12rem 0 6rem;
    display: flex;
    flex-direction: column;
    position: relative;
    ${mobile ({ padding: "0 2rem 0 2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"})};
`;

const Title = styled.div`
    margin-bottom: 2rem;
    ${mobile ({ marginBottom: "1rem"})};
    

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
        ${mobile ({ display: "none"})};
        
    }
`;

const Text = styled.div`
    width: 350px;
    margin-bottom: 2rem;
    ${mobile ({ textAlign: "center", width: "350px", marginBottom: "1rem"})};
    
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
    ${mobile ({ textAlign: "center", width: "350px"})};

    span {
        color: var( --color-light);
    }
`;

const Right = styled.div`
    position: relative;
    margin-top: 3rem;
    ${tablet({ margin: "3rem 6rem 0rem 6rem"})};
    ${mobile ({ display: "flex", flexDirection: "column", gap: "17rem" })};

    &>* {
        position: absolute;
        ${mobile ({ position: "static", })};
       
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

    useEffect(() => {
        Aos.init({duration: 1000});
      },[]);

  return (
    <AboutContainer id='about'>
        
        <Left>
        <Title className='title'> <span data-aos="fade-in"> About Us </span> </Title>
            <Text data-aos="slide-right"> <span data-aos="fade-in">What makes us stand out </span></Text>
            <P data-aos="slide-right">
            <span data-aos="zoom-in"> Our services help you create digital products and solve</span>
            <span data-aos="zoom-in"> your problems objectively,strategically and technologicaly.</span>
            <span data-aos="zoom-in"> Our service also has a high appeal because it has</span>
            <span data-aos="zoom-in"> a beautiful color combination and a minimalist concept.</span>
            </P>
            <Btn data-aos="slide-right"> <Button> Learn More </Button> </Btn>
        </Left>
        <Right>
           <RightContainer style={{left: "20rem"}} data-aos="fade-in">
                <AboutCard  
                number = { <NumberCounter end = {25} start = {0} delay='2' postFix='+' /> }
                heading = {'Projects Completed'}
                />
           </RightContainer>

           <RightContainer style={{top: "12rem", left: "4rem"}}  data-aos="fade-in">
                <AboutCard 
                number = { <NumberCounter end = {20} start = {0} delay='3' postFix='+' /> }
                heading = {'Happy Clients'}
                />
           </RightContainer>

           <RightContainer style={{top: "19rem", left: "18rem"}} data-aos="fade-in">
                <AboutCard  
                number = { <NumberCounter end = {10} start = {0} delay='3' postFix='+' /> }
                heading = {'Years Experience'}
                />
           </RightContainer>
        </Right>
        
    </AboutContainer>
  )
}

export default About