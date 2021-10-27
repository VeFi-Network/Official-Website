import { Container } from "@material-ui/core";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import styled from "styled-components";
import imageCoin from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
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
  width: 1000px;
  color: #161525;
  margin: 0px auto;
  justify-content: center;
  text-align: center;
  padding: 30px 0px;

  h3 {
    font-weight: 500;
    font-size: 26px;
    font-family: "Montserrat";
    color: #161525;
  }
  h1 {
    font-size: 64px;
    font-family: "Montserrat";
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-weight: 1.3em;
    margin: 10px 0px;
    font-family: "Open Sans", sans-serif;
  }
  ${media.mobile`
    width:100%;
    flex-direction:column;
    overflow-wrap: break-word;
    h3{
      font-size:30px;
    }
    h1{
      font-size:65px;
    }
    .mobile{
      font-size:24px;
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
      font-size:18px;
    }
    h1{
      font-size:40px;
    }
    .mobile{
      font-size:20px;
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
          <h3>The next big thing in</h3>
          <h1>Blockchain</h1>
          <p className="mobile">
            The next big thing in Blockchain when high speed meets <br />
            Scalability. VSC ensures high speed and more than lower <br />
            transaction fees under large volumnes of transaction.
          </p>
          <CountDownTimer />
        </CountDownCenter>
      </Container>
    </StyledCountDown>
  );
};

export default CountDown;
