import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from '../../styles/navigation/navbar/Navbar.styled';
import { Logo, FaBars } from '../../utility';
import { Button } from '../../utility/GlobalStyle';
import { NavLinks as Navigation } from '../../utility/data/Navlinks';
import { Flag, Image } from '../../components';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Image img={Logo} alt="Logo" />
            <Flag />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars className="icon" />
          </MobileIcon>
          <NavMenu>
            {Navigation.map(({ label, path }, i) => (
              <NavItem key={i}>
                <NavLinks to={path}>{label}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/connect">
              <Button
                bgColor="#000"
                fontColor="#fff"
                border
                hoverBg="var(--bg-blue)"
              >
                Connect Wallet
              </Button>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
