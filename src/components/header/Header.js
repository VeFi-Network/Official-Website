import React from "react";
import Container from "@material-ui/core/Container";
import {
  HeaderContainer,
  HeaderTop,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
} from "./HeaderTop.styled";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Logo from "../../assets/images/logo.svg";
import CloudUpload from "@material-ui/icons/CloudUpload";

const Header = () => {
  return (
    <>
      <HeaderTop>
        <Container>
          <HeaderContainer>
            <HeaderLeft>
              <img src={Logo} alt="" />
            </HeaderLeft>
            <HeaderCenter>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="about-us">About us</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact-us">Contact us</Link>
            </HeaderCenter>
            <HeaderRight>
              <Button
                variant="contained"
                color="primary"
                endIcon={<CloudUpload />}
              >
                join our community
              </Button>
            </HeaderRight>
          </HeaderContainer>
        </Container>
      </HeaderTop>
    </>
  );
};

export default Header;
