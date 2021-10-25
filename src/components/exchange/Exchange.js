import { Button, Container } from "@material-ui/core";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { Left, Right } from "../styles/Position.styled";
import { ExchangeContainer, StyledExchange } from "./Exchange.styled";
import app_1 from "../../assets/images/app_2.svg";
import { P } from "../Typography";
import { Paper } from "../Grid";

import styled from "styled-components";

const StyledSectionContainer = styled(Right)`
  h1 {
    margin-left: -10px;
    color: #fbf6b4;
    font-size: 50px;
    span {
      font-size: 45px;
    }
  }
  p {
    margin-left: 0px;
    font-weight: 300;
    font-size: 24px;
    color: #fbf6b4;
    line-height: 1.1em;
  }
`;
const Exchange = () => {
  return (
    <StyledExchange>
      <Container>
        <ExchangeContainer>
          <Left size="0.4">
            <img src={app_1} alt="app" />
          </Left>
          <StyledSectionContainer size="0.6">
            <h1>
              VEFI <span>exchange</span>
            </h1>
            <p className="deskToptext">
              VEFI exchange is a unified cryptocurrency
              <br /> exchange platform built to enable users navigate <br />
              and control all crypto related products and <br />
              services on a single platform without goggling <br />
              between platforms and apps.
            </p>
            <p className="mobileText">
              A unified cyrptocurrency exchange platform built to enable users
              navigate and control all cryto related pproducts and services on a
              single platform.
            </p>
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
          </StyledSectionContainer>
        </ExchangeContainer>
      </Container>
    </StyledExchange>
  );
};

export default Exchange;
