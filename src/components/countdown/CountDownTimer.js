import React from "react";
import styled from "styled-components";
import { H1, P } from "../Typography";
import { Btn, CounterTimerBox, WaitList } from "./CountDown.styled";
import media from "../../utility/Media";

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
      font-size:30px;
    }
  `}
`;

export const CounterContainer = styled.div`
  width: 50%;
  display: flex;
  color: #fbf6b4;
  justify-content: center;
  background: ${({ bg }) => bg || "black"};
  height: 200px;
  margin-top: 40px;

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
    height:230px;
  `}
`;

const CountDownTimer = () => {
  return (
    <>
      <CounterContainer bg="black">
        <div>
          <P>Pre-Sale ICO starts in</P>
          <CounterTimerBox>
            <Timer>
              <H1>46</H1>
              <span>Days</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>12</H1>
              <span>Hours</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>05</H1>
              <span>Min</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>56</H1>
              <span>Sec</span>
            </Timer>
          </CounterTimerBox>
          <WaitList>
            <Btn bg="#fbf6b4">read more</Btn>
            <Btn bg="#fbf6b4">join the waitlist</Btn>
          </WaitList>
        </div>
      </CounterContainer>
    </>
  );
};

export default CountDownTimer;
