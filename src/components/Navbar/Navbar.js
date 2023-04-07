import React from 'react';
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

  .logo {
      height: 120px;
      width: 120px;
      padding: 15px 0;
      margin-left: 20px;
      font-size: 30px;
  }

 
`;



const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        IDEA
      </div>
      
      <Burger />
      
    </Nav>
    
  )
}

export default Navbar