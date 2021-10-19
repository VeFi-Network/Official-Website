import React from "react";
import {
  HeroBannerContainer,
  HeroBannerJoinCommunity,
  QuoteLeft,
  QuoteRight,
  StyledHeroBanner,
} from "./HeroBanner.styled";
import {
  HeadingOne,
  HeadingThree,
  Paragraph,
} from "../countdown/CountDown.styled";
import Image from "../../assets/images/guy_2.png";
import { CircleStyled, Left, Right } from "../styles/Position.styled";
import { StyledButton } from "../header/Register";
import { BiSend } from "react-icons/bi";
import asset1 from "../../assets/images/asset1.svg";
const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <QuoteLeft>
        <img src={asset1} alt="" />
      </QuoteLeft>
      <HeroBannerContainer>
        <Left>
          <img src={Image} alt="" />
        </Left>
        <QuoteRight>
          <img src={asset1} alt="" />
        </QuoteRight>
        <Right>
          <HeroBannerJoinCommunity>
            <HeadingOne>
              From<CircleStyled>Africa</CircleStyled>
            </HeadingOne>
            <HeadingThree>to the World</HeadingThree>
            <Paragraph>The next big thing in Blockchain when </Paragraph>
            <Paragraph>high speed meets Scalability from Africa</Paragraph>
            <Paragraph>to the world.</Paragraph>
            <StyledButton icon={<BiSend />} text="Join our community" />
          </HeroBannerJoinCommunity>
        </Right>
      </HeroBannerContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
