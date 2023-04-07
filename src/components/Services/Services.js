import React from 'react';
import styled from 'styled-components';
import ServicesCard from '../Cards/ServicesCard';


const ServicesContainer = styled.div`
    padding: 0 0rem 0 0rem;
    display: flex;
    height: 100vh;
    margin-bottom: 8rem;
    margin-bottom: 13rem;
    flex-direction: column;
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    padding: 0 12rem 0 6rem;
    display: flex;
    flex-direction: column;
    position: relative;

`;

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    padding: 3rem;
    flex-direction: column;

    h5 {
    color: #000000;
    }
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
        top: 5%;
        position: absolute;
        
    }
`;

const Text = styled.div`
    width: 470px;

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
                    <Button>
                        Learn More
                    </Button>
                    </Right>
                    </Split>
                    <ServicesCard />
            
          
</ServicesContainer>
  )
}

export default Services