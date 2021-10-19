import { Container } from "@material-ui/core";
import React from "react";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import { Left, Right } from "../styles/Position.styled";
import { StyledHeroBanner } from "./HeroBanner.styled";
import { Box, StyledFeatureRight, StyledFeatures } from "./Features.styled";
import Feature from "./Feature";
import { BiCheckCircle } from "react-icons/bi";

const Features = () => {
  return (
    <StyledHeroBanner>
      <Container>
        <StyledFeatures>
          <Left size="1">
            <HeadingOne>
              VEFI <span>Wallet</span>
            </HeadingOne>
            <Box>
              <Paragraph>
                VEFI NETWORK native wallet, VEFI ensure that this wallet
              </Paragraph>
              <Paragraph>
                is flexible, secure,easy and simple t use whereby enabling
              </Paragraph>
              <Paragraph>
                users to store, send,spend,receive,swap and exchange
              </Paragraph>
              <Paragraph>thier crypto assets instantly.</Paragraph>
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
            <StyledFeatureRight></StyledFeatureRight>
          </Right>
        </StyledFeatures>
      </Container>
    </StyledHeroBanner>
  );
};

export default Features;
