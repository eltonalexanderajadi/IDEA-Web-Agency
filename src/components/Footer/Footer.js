import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";

const FooterContainer = styled.div`
    margin-top: 5rem;
    padding: 2.5rem 3.5rem;
    background: var(--color-bg-variant);
    border-radius: 15px 15px 0 0;
    ${mobile({ padding: "1.5rem 2.5rem"})};
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    align-items: center;
    ${mobile({ flexDirection: "column"})};
`;

const Left = styled.div`
   
    display: flex;
    flex-direction: column;
    position: relative;
    ${mobile({ width: ""})};

`;

const Right = styled.div`
    position: relative;
    display: flex;
    padding: 3rem 0rem 3rem 0rem;
    flex-direction: column;
    ${mobile({ padding: "3rem 7rem 3rem 2.5rem"})};
    

    h5 {
    color: #000000;
    }
`;


const Text = styled.div`
    width: 300px;

    span {
        font-size: 4rem;
        font-weight: bold;
        line-height: 1.1;
        letter-spacing: 2px;
        color: var(--color-white);
    }
`;

const Button = styled.button`
    width: 200px;
    padding: 10px;
    background: var(--color-primary);
    color: #000000;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 2rem;
    margin-top: 2rem;

`;

const Hr = styled.hr`
    
    border: 1px solid var(--color-white);
`;

const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

const BottomLeft = styled.div`
    display: flex;
    justiy-content: center;
    align-items: center;
    ${mobile({ flexDirection: "column",  paddingTop: "1.5rem"})};
`;

const BottomText = styled.div`
    color: var(--color-white);
`;

const Center = styled.div`
    display: flex;
    justiy-content: center;
    align-items: center;
    ${mobile({ flexDirection: "column", paddingTop: "2rem"})};
`;

const Copyright = styled.div`
    color: gray;
    ${mobile({ textAlign: "center"})};

    small {
        letter-spacing: 1px;
    }
`;

const BottomRight = styled.div`
    display: flex;
    justiy-content: center;
    align-items: center;
    ${mobile({ flexDirection: "column",  paddingTop: "2rem"})};
`;

const SocialLinks = styled.div`
    a {
        padding-left: 15px;
    }
`;


const Footer = () => {
  return (
    <FooterContainer>
         <Split>
                <Left>
                    <Text>
                    <span> Have an awesome project? </span>
                    </Text>  
                </Left>
                <Right>
                    <Button>
                        Let's Discuss!
                    </Button>
                    </Right>
                    </Split>
                    <Hr />
                    <FooterBottom>
                        <BottomLeft>
                        <BottomText>
                            IDEA
                        </BottomText>
                        </BottomLeft>
                        <Center>
                        <Copyright>
                            <small> Copyright &copy; IDEA 2023 All Rights Reserved</small>
                        </Copyright>
                        </Center>
                        <BottomRight>
                        <SocialLinks>
                        <a href= 'https://instagram.com'> <Instagram /> </a>
                        <a href= 'https://facebook.com'> <Facebook /> </a>
                        <a href= 'https://linkedin.com'> <LinkedIn /> </a>
                        </SocialLinks>
                        </BottomRight>
                    </FooterBottom>
    </FooterContainer>
  )
}

export default Footer