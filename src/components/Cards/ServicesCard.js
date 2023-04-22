import React, { useEffect } from 'react'
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";
import Aos from 'aos';
import "aos/dist/aos.css";

const Container = styled.div`
    

`;

const CardContainer = styled.div`
    padding: 0 12rem 0 6rem;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    position: relative;
    ${tablet({ gridTemplateColumns: "1fr", padding: "0 6rem 0 6rem" })};
    ${mobile ({ padding: "1rem 2rem 1rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"})};
    
`;

const ServiceCard = styled.div`
    background: var(--color-primary);
    padding: 2.4rem 5rem;
    border: 1px solid transparent;
    transition: var(--transition);
    box-shadow: -5px 5px;
    ${mobile ({ padding: "1.2rem 1.2rem"})};
    
    
`;

const Text = styled.div`
    width: 350px;
    margin-bottom: 2rem;
    ${mobile ({ width: "300px"})};
    
    span {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.1;
        letter-spacing: 2px;
        ${mobile ({ fontSize: "1.4rem"})};
    }
`;

const P = styled.div`
    width: 420px;
    ${mobile ({ width: "300px"})};

    span {
        ${mobile ({ fontSize: "0.8rem"})};
        color: var( --color-light);
        letter-spacing: 2px;
    }
`;

const ServicesCard = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
      },[]);

  return (
    <Container>
        <CardContainer>

        <ServiceCard data-aos="zoom-in">
        <Text> <span>Consultant Business Strategy </span></Text>
        <P>
            <span> We provide the best solutions for your digital</span>
            <span> products in order to help improve digital products,</span>
            <span> so that you are more advanced.</span>
       </P>
        </ServiceCard>

        <ServiceCard data-aos="zoom-in">
        <Text> <span>Google Ads Management </span></Text>
        <P>
            <span> Help manage ads on google to further maximize</span>
            <span> potential customer reach and give interest to your project.</span>
       </P>
        </ServiceCard>

        <ServiceCard data-aos="zoom-in">
        <Text> <span> Research And Discovery</span></Text>
        <P>
            <span> Conduct in-depth and detailed analysis to obtain as much </span>
            <span> information as possible and high accuracy required</span>
            <span> by our customer product needs.</span>
       </P>
        </ServiceCard>

        <ServiceCard data-aos="zoom-in">
        <Text> <span> Social Media Marketing </span></Text>
        <P>
            <span>  Provide customer attraction on social media for your </span>
            <span>  product, because we will help manage your products</span>
            <span>  professional account and attract more customers.</span>
       </P>
        </ServiceCard>

        </CardContainer>
    </Container>
  )
}

export default ServicesCard