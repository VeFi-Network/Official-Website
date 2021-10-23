import React from "react";
import {
  HeroBannerContainer,
  HeroBannerJoinCommunity,
  QuoteLeft,
  QuoteRight,
  StyledHeroBanner,
} from "./HeroBanner.styled";

import Image from "../../assets/images/guy_2.png";
import { CircleStyled, Left, Right } from "../styles/Position.styled";
import { BiSend } from "react-icons/bi";
import asset1 from "../../assets/images/asset1.svg";
import { Button } from "../Button";
import { H1, H3, P } from "../Typography";

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <QuoteLeft className="hideOnMobile">
        <img src={asset1} alt="" />
      </QuoteLeft>
      <HeroBannerContainer className="phone">
        <Left>
          <img src={Image} alt="" />
        </Left>
        <QuoteRight className="hideOnMobile">
          <img src={asset1} alt="" />
        </QuoteRight>
        <Right>
          <HeroBannerJoinCommunity>
            <H1>
              From<CircleStyled>Africa</CircleStyled>
            </H1>
            <H3>to the World</H3>
            <P>
              The next big thing in Blockchain when high speed meets Scalability
              from Africa to the world.
            </P>
            <Button icon={<BiSend />} text="Join our community" />
          </HeroBannerJoinCommunity>
        </Right>
      </HeroBannerContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
