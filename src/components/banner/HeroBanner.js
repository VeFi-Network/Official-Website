import React from "react";
import {
  HeroBannerContainer,
  HeroBannerJoinCommunity,
  QuoteLeft,
  QuoteRight,
  StyledHeroBanner,
} from "./HeroBanner.styled";

import Image from "../../assets/images/guy_2.png";
import { Left, Right } from "../styles/Position.styled";
import asset1 from "../../assets/images/asset1.svg";
import { Button } from "../Button";
import { FaTelegramPlane } from "react-icons/fa";
import circle from "../../assets/images/circle_yellow.svg";
import styled from "styled-components";
import media from "../../utility/Media";

const CircleStyled = styled.span`
  background-image: url(${circle});
  background-size: contain;
  padding: 20px 50px;
  background-position: center;

  ${media.mobile`
    background-image: url(${circle});
  `}
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
              <span className="mobileText">From</span>
              <CircleStyled>Africa</CircleStyled> to the{" "}
              <span className="mobileText">World</span>
            </h1>
            <p>
              The next big thing in Blockchain when high speed meets Scalability
              from Africa to the world.
            </p>
            <Button icon={<FaTelegramPlane />} text="Join our community" />
          </HeroBannerJoinCommunity>
        </Right>
      </HeroBannerContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
