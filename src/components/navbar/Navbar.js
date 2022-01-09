import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
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
  const web3 = useWeb3React();

  const handleConnect = () => {
    dispatch(openModal());
  };

  const closeWeb3Connection = () => web3.deactivate();

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
              label={web3.active ? "Wallet Connected" : "Connect Wallet"}
              onClick={web3.active ? closeWeb3Connection : handleConnect}
            />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
