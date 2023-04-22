import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";
import Navbar from '../Navbar/Navbar';
import HeroImage from '../../assets/hero.jpg';
import {motion} from 'framer-motion';


const HeroContainer = styled.div`
    height: 100vh;
    background: linear-gradient(to right, #ffffff 50%, #000000 50%);
    ${tablet({ background: "#121212", flexDirection: "column", borderRadius: "0px 0px 15px 15px", height: "100%"})};
    
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ display: "flex", flexDirection: "column"})};
`;

const Left = styled.div`
    padding: 2rem;
    flex: 3;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    ${mobile ({ padding: "2rem"})};
     h1 {
        ${mobile ({ fontSize: "2rem"})};
     }
    
`;

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    padding: 3rem;
    flex-direction: column;
    ${mobile({ padding: "2rem" })};

    h5 {
        font-size: 20px;
        color: #ffffff;
        ${tablet({ color: "gray"})};
        ${mobile({ width: "300px", fontSize: "17px", })};
    }
`;

const Text = styled.div`
    letter-spacing: 5px;
    width: 470px;
    margin-top: 4rem;
    h1 {
       
        ${tablet({ color: "#ffffff"})};
        ${mobile({ width: "350px"  })};
    }     
   
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: var(--color-primary);
    color: #000000;
    font-size: 15px;
    cursor: pointer;
    margin-top: 1rem;
`;

const HeroImgContainer = styled.div`
    
    .heroImage {
        overflow: hidden;
        width: 60rem;
        height: 30rem;
        top: 20rem;
        border-radius: 2rem;
        right: 12rem;
        position: absolute;
        border-radius: 2.5rem;
        ${tablet({ display: "none"})};
    }
`;


const Hero = () => {
  return (
    <HeroContainer >
            <Navbar />
                <Split>
                <Left>
                    <Text>
                    <motion.h1
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                        Make Your Business Grow and Solve Your Problem </motion.h1>
                    </Text>  
                </Left>
                <Right>
                    <Text>
                    <motion.h5
                        initial={{ x: "-100%"}}
                        animate={{ x: "0"}}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                            Choose a beautiful and minimalist web agency with values that converts more visitors that any website.</motion.h5>
                    </Text>
                    <Button>
                        Lets Talk
                    </Button>
                    <HeroImgContainer>
                    <div className='heroImage'>
                        <img src={HeroImage} alt=""/>
                    </div>
                </HeroImgContainer>
                    
                </Right>
                
                
                </Split>
    </HeroContainer>
  )
}

export default Hero