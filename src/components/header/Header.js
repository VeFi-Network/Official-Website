import Container from "@material-ui/core/Container";
import { HeaderContainer, HeaderTop, HeaderLeft, HeaderRight } from "./HeaderTop.styled";
import Logo from "../../assets/images/logo.png";

import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "../Button";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderTop>
        <Container>
          <HeaderContainer>
            <HeaderLeft>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </HeaderLeft>
            <HeaderRight>
              <Navigation />
              <a href="https://t.me/vefi_official" target="_blank" rel="noreferrer" className="desktopNav">
                <Button icon={<FaTelegramPlane />} label="Join our community" bg="" />
              </a>
            </HeaderRight>
          </HeaderContainer>
        </Container>
      </HeaderTop>
    </>
  );
};

export default Header;
