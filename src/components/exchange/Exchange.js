import { Container } from "@material-ui/core";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import Feature from "../banner/Feature";
import { Box } from "../banner/Features.styled";
import { Left, Right } from "../styles/Position.styled";
import { ExchangeContainer, StyledExchange } from "./Exchange.styled";
import app_1 from "../../assets/images/app_2.svg";
import { H1, P } from "../Typography";
const Exchange = () => {
  return (
    <StyledExchange>
      <Container>
        <ExchangeContainer>
          <Left size="0.4">
            <img src={app_1} alt="app" />
          </Left>
          <Right size="0.6">
            <H1 color="#fbf6b4" size="80px">
              VEFI exchange
            </H1>
            <P>
              VEFI exchange is a unified cryptocurrency exchange platform built
              to enable users navigate and control all crypto related products
              and services on a single platform without goggling between
              platforms and apps.
            </P>
            <Box width="70%">
              <Feature Icon={<BiCheckCircle />} Text="Margin trading" />
              <Feature Icon={<BiCheckCircle />} Text="P2P trading" />
              <Feature Icon={<BiCheckCircle />} Text="Features trading" />
              <Feature Icon={<BiCheckCircle />} Text="Spot trading" />
              <Feature Icon={<BiCheckCircle />} Text="NFT" />
              <Feature Icon={<BiCheckCircle />} Text="DEX" />
            </Box>
          </Right>
        </ExchangeContainer>
      </Container>
    </StyledExchange>
  );
};

export default Exchange;
