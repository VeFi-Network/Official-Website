import { Container } from "@material-ui/core";
import React from "react";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import { Left, Right } from "../styles/Position.styled";
import { StyledHeroBanner } from "./HeroBanner.styled";
import {
  AppMockUp,
  Box,
  FeaturedRightImage,
  StyledFeatureRight,
  StyledFeatures,
} from "./Features.styled";
import Feature from "./Feature";
import { BiCheckCircle } from "react-icons/bi";
import map from "../../assets/images/map.png";
import app_1 from "../../assets/images/app_1.svg";
import { H1, P } from "../Typography";
const Features = () => {
  return (
    <StyledHeroBanner>
      <Container>
        <StyledFeatures>
          <Left size="1">
            <H1>
              VEFI <span>Wallet</span>
            </H1>
            <Box>
              <P>VEFI NETWORK native wallet, VEFI ensure that this wallet</P>
              <P>is flexible, secure,easy and simple t use whereby enabling</P>
              <P>users to store, send,spend,receive,swap and exchange</P>
              <P>thier crypto assets instantly.</P>
            </Box>
            <Box width="70%">
              <Feature Icon={<BiCheckCircle />} Text="Store Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Send Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Spend Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Swap Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Receive Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Exchange Crypto" />
              <Feature Icon={<BiCheckCircle />} Text="Stake assets" />
            </Box>
          </Left>
          <Right size="0.4">
            <StyledFeatureRight>
              <FeaturedRightImage>
                <img src={map} alt="app" />
              </FeaturedRightImage>
              <AppMockUp>
                <img src={app_1} alt="app" />
              </AppMockUp>
            </StyledFeatureRight>
          </Right>
        </StyledFeatures>
      </Container>
    </StyledHeroBanner>
  );
};

export default Features;
