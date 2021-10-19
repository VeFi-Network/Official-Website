import { Container } from "@material-ui/core";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeadingThree } from "../countdown/CountDown.styled";
import {
  SocialIcons,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterNav,
} from "./Footer.styled";
import logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <hr />
        <StyledFooterContainer>
          <StyledFooterNav>
            <HeadingThree color="white">Company</HeadingThree>
            <Link>About us</Link>
            <Link>About us</Link>
            <Link>About us</Link>
            <Link>About us</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Product</HeadingThree>
            <Link>Wallet</Link>
            <Link>Exchange</Link>
            <Link>Smart Chain</Link>
            <Link>Network</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Support</HeadingThree>
            <Link>FAQ</Link>
            <Link>Support center</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Legal</HeadingThree>
            <Link>Privacy Policy</Link>
            <Link>Terms &amp; Condition</Link>
            <HeadingThree color="white">Community</HeadingThree>
            <Link>About us</Link>
            <Link>About us</Link>
          </StyledFooterNav>
        </StyledFooterContainer>
        <hr />
        <StyledFooterContainer>
          <StyledFooterNav>
            <img src={logo} alt="" />
            <p>&copy; 2021 VEFI Technologies</p>
            <p>All Rights Reserved</p>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Contact</HeadingThree>
            <Link>info@vefi.com</Link>
            <Link>support@vefi.com</Link>
            <SocialIcons>
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <AiFillTwitterCircle />
              </span>
              <span>
                <AiOutlineLinkedin />
              </span>
              <span>
                <AiFillInstagram />
              </span>
            </SocialIcons>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">USA</HeadingThree>
            <p>
              No 11 address lane, USA <br />
              Town State
            </p>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Nigeria</HeadingThree>
            <p>
              No 11 address lane, USA <br />
              Town State
            </p>
          </StyledFooterNav>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
