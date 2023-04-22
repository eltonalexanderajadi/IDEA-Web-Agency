import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";

import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display:flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  top: 0;
  transition: background-color 0.5s ease;

  &.navbar-scroll {
    background-color: #121212;
    color: white;
    z-index: 3;
  }


  .logo {
      height: 120px;
      width: 120px;
      padding: 15px 0;
      margin-left: 20px;
      font-size: 30px; 
      ${tablet({ color: "#ffffff"})};
  }

 
`;



const Navbar = () => {
  const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <Nav className= {scroll ? "navbar-scroll" : ""}>
      <div className='logo'>
        IDEA
      </div>
      
      <Burger />
      
    </Nav>
    
  )
}

export default Navbar