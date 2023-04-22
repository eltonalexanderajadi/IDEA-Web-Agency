import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";
import RightNav from './RightNav';


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 26px;
    right: 20px;
    z-index: 20;
    display: none;
    ${mobile({ display: "flex", justifyContent: "space-around", flexFlow: "column nowrap" })};
    ${tablet({ display: "flex", justifyContent: "space-around", flexFlow: "column nowrap"})};


    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#fff' : "#fff"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;



const Burger = () => {
    const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };

  return (
    <>
   <StyledBurger open={open} onClick = {handleClick}>
        <div />
        <div />
        <div />
   </StyledBurger>
   <RightNav open={open} />
   </>
  )
}

export default Burger