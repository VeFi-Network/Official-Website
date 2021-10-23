import { Button, Container } from "@material-ui/core";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import Feature from "../banner/Feature";
import { Box } from "../banner/Features.styled";
import { Left, Right } from "../styles/Position.styled";
import { ExchangeContainer, StyledExchange } from "./Exchange.styled";
import app_1 from "../../assets/images/app_2.svg";
import { H1, P } from "../Typography";
import { Paper } from "../Grid";
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
            <Paper>
              <div>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Margin trading
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  P2P trading
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Features trading
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Spot trading
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  NFT
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  DEX
                </Button>
              </div>
            </Paper>
          </Right>
        </ExchangeContainer>
      </Container>
    </StyledExchange>
  );
};

export default Exchange;
