import React from "react";
import {
  HeroBannerContainer,
  HeroBannerJoinCommunity,
  QuoteLeft,
  QuoteRight,
  StyledHeroBanner
} from "./HeroBanner.styled";

import Image from "../../assets/images/guy_2.png";
import { Left, Right } from "../styles/Position.styled";
import asset1 from "../../assets/images/asset1.svg";
import { Button } from "../Button";
import { FaTelegramPlane } from "react-icons/fa";
import circle from "../../assets/images/circle_yellow.svg";
import styled from "styled-components";

const CircleStyled = styled.span`
  background-image: url(${circle});
  background-size: contain;
  padding: 20px 0px;
  background-position: center;
  background-repeat: no-repeat;
  color: #fbf6b4;
`;
const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <QuoteLeft className="hideOnMobile">
        <img src={asset1} alt="" />
      </QuoteLeft>
      <HeroBannerContainer className="phone">
        <Left className="imageMobile">
          <img src={Image} alt="" />
        </Left>
        <QuoteRight className="hideOnMobile">
          <img src={asset1} alt="" />
        </QuoteRight>
        <Right>
          <HeroBannerJoinCommunity>
            <h1>
              From
              <CircleStyled>Africa</CircleStyled>to the world
            </h1>
            <p>
              {" "}
              The next big thing in the blockchain ecosphere where high speed meets scalability from Africa to the
              world.
            </p>
            <a href="https://t.me/vefi_official" target="_blank" rel="noreferrer">
              <Button icon={<FaTelegramPlane />} text="Join our community" />
            </a>
          </HeroBannerJoinCommunity>
        </Right>
      </HeroBannerContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
