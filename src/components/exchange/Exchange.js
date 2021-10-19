import { Container } from "@material-ui/core";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import Feature from "../banner/Feature";
import { Box } from "../banner/Features.styled";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import { Left, Right } from "../styles/Position.styled";
import { ExchangeContainer, StyledExchange } from "./Exchange.styled";
const Exchange = () => {
  return (
    <StyledExchange>
      <Container>
        <ExchangeContainer>
          <Left size="0.4"></Left>
          <Right size="0.6">
            <HeadingOne color="#fbf6b4">VEFI exchange</HeadingOne>
            <Paragraph>VEFI exchange is a unified cryptocurrency</Paragraph>
            <Paragraph>
              exchange platform built to enable users navigate
            </Paragraph>
            <Paragraph>and control all crypto related products and </Paragraph>
            <Paragraph>
              services on a single platform without goggling
            </Paragraph>
            <Paragraph>between platforms and apps.</Paragraph>
            <Box width="70%">
              <Feature Icon={<BiCheckCircle />} Text="Margin trading" />
              <Feature Icon={<BiCheckCircle />} Text="P2P trading" />
              <Feature Icon={<BiCheckCircle />} Text="Features trading" />
              <Feature Icon={<BiCheckCircle />} Text="Spot trading" />
            </Box>
          </Right>
        </ExchangeContainer>
      </Container>
    </StyledExchange>
  );
};

export default Exchange;
