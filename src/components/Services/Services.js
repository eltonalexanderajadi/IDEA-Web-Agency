import React from 'react';
import styled from 'styled-components';
import ServicesCard from '../Cards/ServicesCard';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";


const ServicesContainer = styled.div`
    
    padding: 0 0rem 0 0rem;
    display: flex;
    height: 100vh;
    margin-top: 17rem;
    margin-bottom: 17rem;
    flex-direction: column;
    ${tablet({ height: "100%", marginTop: "20rem", marginBottom: "12rem" })};
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

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    padding: 3rem;
    flex-direction: column;
    ${tablet({ padding: "3rem 12rem 3rem 6rem"})};
    ${mobile ({ display: "flex", flexDirection: "column", padding: "1rem 2rem 1rem 2rem"})};

    h5 {
    color: #000000;
    }
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
        top: 5%;
        position: absolute;
        ${mobile ({ display: "none"})};
        
    }
`;

const Text = styled.div`
    width: 470px;
    ${mobile ({ textAlign: "center", width: "350px", padding: "0 3rem 0 1rem" })};

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
    margin-bottom: 2rem;
`;

const Services = () => {
  return (
    <ServicesContainer>
        
        <Split>
                <Left>
                <Title className='title'> Our Services </Title>
                    <Text>
                    <span> We Offer The Best Services </span>
                    </Text>  
                </Left>
                <Right>
                    <P>
                    <span>Choose a beautiful and minimalist web agency with values that converts more visitors that any website.</span>
                    </P>
                    <Btn>
                    <Button>
                        Learn More
                    </Button>
                    </Btn>
                    </Right>
                    </Split>
                    <ServicesCard />
            
          
</ServicesContainer>
  )
}

export default Services