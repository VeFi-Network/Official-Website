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
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/investors">Investor Relations</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Product</HeadingThree>
            <Link to="/product/wallet">Wallet</Link>
            <Link to="/product/exchange">Exchange</Link>
            <Link to="/product/smart-chain">Smart Chain</Link>
            <Link to="/product/network">Network</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Support</HeadingThree>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">Support center</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <HeadingThree color="white">Legal</HeadingThree>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
            <Link to="/legal/terms">Terms &amp; Condition</Link>
            <HeadingThree color="white">Community</HeadingThree>
            <Link to="/">Telegram</Link>
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
            <Link to="/">info@vefi.com</Link>
            <Link to="/">support@vefi.com</Link>
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
