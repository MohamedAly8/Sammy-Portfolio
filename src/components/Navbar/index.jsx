import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Sameeha
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    Projects
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/contact">Contact Me</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
