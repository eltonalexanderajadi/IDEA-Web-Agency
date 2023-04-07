import React, { useState }from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 26.67px 35px;
      cursor: pointer;
      transition: var(--transition);
      color: #ffffff;
      ${mobile({ color: "#fff"})};

      &:hover {
        color: #fff;

      }
      a.{
        transition: border-bottom .3s ease-in-out;
      }
      a.active {
        text-decoration: none;
        border-bottom: 2px solid var(--color-primary);
        padding: 5px;
      }

      
    }

    @media (max-width: 600px) {
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; 
        transition: transform 0.3s ease-in-out;
    }

    ${mobile({
        
        flexFlow: "column nowrap",
        backgroundColor: "var(--color-primary)",
        position: "fixed",
        top: "0",
        right: "0",
        height: "100vh",
        width: "100vw",
        paddingTop: "3.5rem",
        zIndex: "1"


     })};



  }`;

const RightNav = ({open}) => {
    const [activeNav, setActiveNav] = useState('#');

  return (
    <Ul open = {open}> 
        <li> <a href="#" onClick ={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> Home </a> </li>
        <li> <a href="#services" onClick ={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> Services </a> </li>
        <li> <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> About Us </a> </li>
        <li> <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> Contact Us</a> </li>
    </Ul>
  )
}

export default RightNav