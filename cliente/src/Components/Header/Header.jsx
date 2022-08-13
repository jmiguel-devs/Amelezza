import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid } from "@mui/material";
import { styled } from '@mui/system';
import "./styles.css"
import { useDispatch, useSelector, useStore } from "react-redux";
import Cart from '../Cart/Cart.jsx'
import { useCart } from "react-use-cart";
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: 'Work Sans'!important;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: red;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeUnstyledClasses.invisible} {
    display: none;
  }
`;

const Header = () => {
    
    const dispatch = useDispatch();

    const { totalItems  } = useCart();

    const openCart = () => {
        dispatch({
            type: "@cart/toggleCart"
        })
    }

    return (
        <div className="header-container">
            <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" width="163" height="50" viewBox="0 0 163 50">
                <text id="amelezza" transform="translate(0 39)" fill="#000" fontSize="35" fontFamily="Biko-Bold, Biko" fontWeight="700" letterSpacing="-0.021em"><tspan x="0" y="0">amelezza</tspan></text>
            </svg>
            <StyledBadge  badgeContent={totalItems}>
                <MenuIcon onClick={openCart}/>
            </StyledBadge>
            <Cart></Cart>
        </div>
    )
}

export default Header