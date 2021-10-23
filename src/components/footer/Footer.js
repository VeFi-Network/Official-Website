import { Container } from "@material-ui/core";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  SocialIcons,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterNav,
} from "./Footer.styled";
import logo from "../../assets/images/logo.svg";
import { H3, P } from "../Typography";
import { Divider } from "../Divider";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Divider className="mobile" />
        <StyledFooterContainer>
          <StyledFooterNav>
            <H3 color="white">Company</H3>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/investors">Investor Relations</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <H3 color="white">Product</H3>
            <Link to="/product/wallet">Wallet</Link>
            <Link to="/product/exchange">Exchange</Link>
            <Link to="/product/smart-chain">Smart Chain</Link>
            <Link to="/product/network">Network</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <H3 color="white">Support</H3>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">Support center</Link>
          </StyledFooterNav>
          <StyledFooterNav>
            <H3 color="white">Legal</H3>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
            <Link to="/legal/terms">Terms &amp; Condition</Link>
            <H3 color="white">Community</H3>
            <Link to="/">Telegram</Link>
          </StyledFooterNav>
        </StyledFooterContainer>
        <Divider className="mobile" />
        <StyledFooterContainer>
          <StyledFooterNav>
            <img src={logo} alt="" />
            <p>&copy; 2021 VEFI Technologies</p>
            <p>All Rights Reserved</p>
          </StyledFooterNav>
          <StyledFooterNav>
            <H3 color="white">Contact</H3>
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
            <H3 color="white">USA</H3>
            <P>
              No 11 address lane, USA <br />
              Town State
            </P>
          </StyledFooterNav>
          <StyledFooterNav>
            <H3 color="white">Nigeria</H3>
            <P>
              No 11 address lane, USA <br />
              Town State
            </P>
          </StyledFooterNav>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
