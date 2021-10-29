import { Button, Container } from "@material-ui/core";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { Left, Right } from "../styles/Position.styled";
import { ExchangeContainer, StyledExchange } from "./Exchange.styled";
import app_1 from "../../assets/images/app_2.svg";
import phone_app_1 from "../../assets/images/phone__app_1.png";
import phone_app_2 from "../../assets/images/phone__app_2.png";
import arrow from "../../assets/images/arrow.svg";
import { Paper } from "../Grid";

import styled from "styled-components";
import media from "../../utility/Media";

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
    color: white;
    line-height: 1.1em;
  }

  ${media.mobile`

    .mobileText{
      width:auto;
      white-space:wrap;
      margin-bottom:5px;
      padding:0px 20px;
      line-height:1.3em;
    }
    h1{
      margin-left:8px;

      span{
        font-size:50px;
      }
    }
  `}
  ${media.small`
  h1{
    margin-left:0px;

    span{
      font-size:40px;
    }
  }
  .mobileText{
    width:auto;
    white-space:wrap;
    margin-bottom:5px;
    padding:0px 10px;
  }
  `}
`;
const Exchange = () => {
  return (
    <StyledExchange>
      <Container>
        <ExchangeContainer>
          <Left size="0.4">
            <img src={app_1} alt="app" className="deskToptext" />
            <div className="arrow">
              {" "}
              <img src={arrow} alt="app" />
            </div>
            <div className="desktop">
              <img src={phone_app_1} alt="app" />
              <img src={phone_app_2} alt="app" />
            </div>
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
              A unified cyrptocurrency exchange platform built to enable users navigate and control all cryto related
              pproducts and services on a single platform.
            </p>
            <Paper>
              <div>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
                  Margin trading
                </Button>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
                  P2P trading
                </Button>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
                  Features trading
                </Button>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
                  Spot trading
                </Button>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
                  NFT
                </Button>
                <Button variant="contained" startIcon={<BiCheckCircle />} className="button">
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
