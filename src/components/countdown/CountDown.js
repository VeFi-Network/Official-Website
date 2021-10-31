import { Container } from "@material-ui/core";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import styled from "styled-components";
import imageCoin from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
import { H1, H3 } from "../Typography";
const StyledCountDown = styled.div`
  width: 100%;
  background: url(${imageCoin}) no-repeat, rgba(254, 253, 233, 255);
  display: flex;
  background-position: left;
  background-size: contain;
  background-blend-mode: lighten;

  ${media.mobile`
    width:100%;
    flex-direction:column;
  `}
`;
const CountDownCenter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  color: #161525;
  justify-content: center;
  text-align: center;
  padding: 70px 0px;

  h3 {
    font-weight: 600;

    color: #161525;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3em;
    margin: 10px 0px;
    max-width: 50ch;
    font-family: "Open Sans", sans-serif;
  }
  ${media.mobile`
    width:100%;
    flex-direction:column;
    overflow-wrap: break-word;
    padding:0px;
    h3{
      font-size:26px;
    }
    h1{
      font-size:54px;
    }
    .mobile{
      font-size:18px;
      font-weight:normal;
      margin-bottom:30px;
      color:#383838;
    }
  `}

  ${media.small`
    width:100%;
    flex-direction:column;
    overflow-wrap: break-word;
    h3{
      font-size:26px;
    }
    h1{
      font-size:54px;
    }
    .mobile{
      font-size:18px;
      color:#383838;
      font-weight:normal;
    }
  `}
`;
const CountDown = () => {
  return (
    <StyledCountDown>
      <Container>
        <CountDownCenter>
          <H3 size="1.2rem">The next big thing in</H3>
          <H1 size="3.0rem">Blockchain</H1>
          <p className="mobile">
            The next big thing in Blockchain when high speed meets Scalability. VSC ensures high speed and more than
            lower transaction fees under large volumnes of transaction.
          </p>
          <CountDownTimer />
        </CountDownCenter>
      </Container>
    </StyledCountDown>
  );
};

export default CountDown;
