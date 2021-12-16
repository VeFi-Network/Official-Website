import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn
} from "../../styles/navigation/navbar/Navbar.styled";
import { Logo, FaBars } from "../../utility";
import { NavLinks as Navigation } from "../../utility/data/Navlinks";
import { Flag, Image, Button } from "../../components";
import { ConnectWallet } from "../../utility/function";

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
                <NavLinks to={path} smooth={true} duration={300} spy={true} exact="true">
                  {label}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <Button
              bgColor="#000"
              fontColor="#fff"
              border
              hoverBg="var(--bg-blue)"
              label="Connect Wallet"
              onClick={ConnectWallet}
            />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
