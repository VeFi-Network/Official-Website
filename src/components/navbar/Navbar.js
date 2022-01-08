import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { Flag, Image, Button, ConnectWallet, BuyNow } from "../../components";
import { openModal } from "../../redux/toggleSlice";

const Navbar = ({ toggle }) => {
  const { showConnectModal, showBuyNowModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const [connected] = useState(false);

  const handleConnect = () => {
    dispatch(openModal());
  };
  return (
    <>
      <ConnectWallet showConnectModal={showConnectModal} />
      <BuyNow showBuyNowModal={showBuyNowModal} />
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
              label={connected ? "Wallet Connected" : "Connect Wallet"}
              onClick={connected ? "" : handleConnect}
            />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
