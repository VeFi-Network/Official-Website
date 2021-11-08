import React from "react";
import styled from "styled-components";
import media from "../utility/Media";
import { Btn, CounterTimerBox, WaitList } from "../pages/home/Home.styled";
import { H1, P } from "./Typography";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

export const Timer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
  }
  span {
    font-size: 14px;
    color: #fbf6b4;
  }
  ${media.mobile`
    h1{
      font-size:26px !important;
    }
    span {
      font-size: 12px;
    }
  `}
`;

export const CounterContainer = styled.div`
  width: 45%;
  display: flex;
  margin: 20px auto;
  color: #fbf6b4;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#06041e"};
  height: auto;
  padding: 0px 30px 30px 30px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
      margin-top: 15px;
    }
  }

  ${media.mobile`
    width:110%;
    height:auto;
    margin-left:-15px;
    padding-bottom:20px;
    background:#06041E;

    button{
      font-weight:600;
      font-size:16px;
      
    }
  `}

  ${media.small`
    button{
      font-size:14px;
    }
  `}
`;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return "countdown completed";
  } else {
    // Render a countdown
    return (
      <>
        <CounterTimerBox>
          <Timer>
            <H1>{days}</H1>
            <span>Days</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1>{hours}</H1>
            <span>Hours</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1>{minutes}</H1>
            <span>Min</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1>{seconds}</H1>
            <span>Sec</span>
          </Timer>
        </CounterTimerBox>
      </>
    );
  }
};
const CountDownTimer = ({ bg, className }) => {
  return (
    <>
      <CounterContainer bg={bg} className={className}>
        <div>
          <P>Pre-Sale ICO starts in</P>
          <Countdown date={"2021-12-31"} renderer={renderer} />

          <WaitList>
            <Link to="/token">
              <Btn bg="#fbf6b4">Buy VEF Token</Btn>
            </Link>

            <Link to="/docs/VEFI_WHITEPAPER.pdf" target="_blank">
              <Btn bg="#fbf6b4">Whitepaper</Btn>
            </Link>
          </WaitList>
        </div>
      </CounterContainer>
    </>
  );
};

export default CountDownTimer;
