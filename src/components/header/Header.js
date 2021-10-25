import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  HeaderContainer,
  HeaderTop,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
} from "./HeaderTop.styled";
import Logo from "../../assets/images/logo.svg";

import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "../Button";
import Navigation from "../../pages/navbar/Navigation";

const Header = () => {
  return (
    <>
      <HeaderTop>
        <Container>
          <HeaderContainer>
            <HeaderLeft>
              <img src={Logo} alt="" />
            </HeaderLeft>
            <HeaderRight>
              <Navigation />
              <Button
                icon={<FaTelegramPlane />}
                text="Join our community"
                bg=""
              />
            </HeaderRight>
          </HeaderContainer>
        </Container>
      </HeaderTop>
    </>
  );
};

export default Header;
