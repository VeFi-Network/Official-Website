import React from "react";
import styled from "styled-components";
import {
  Btn,
  CounterTimerBox,
  HeadingOne,
  Paragraph,
  WaitList,
} from "./CountDown.styled";

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

  @media screen and (max-width: ${({ theme }) => theme.iPhone_11}) {
  }
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

  @media screen and (max-width: ${({ theme }) => theme.iPhone_11}) {
    width: 100%;
  }
`;

const CountDownTimer = () => {
  return (
    <>
      <CounterContainer bg="black">
        <div>
          <Paragraph>Pre-Sale ICO starts in</Paragraph>
          <CounterTimerBox>
            <Timer>
              <HeadingOne>46</HeadingOne>
              <span>Days</span>
            </Timer>
            <span>:</span>
            <Timer>
              <HeadingOne>12</HeadingOne>
              <span>Hours</span>
            </Timer>
            <span>:</span>
            <Timer>
              <HeadingOne>05</HeadingOne>
              <span>Min</span>
            </Timer>
            <span>:</span>
            <Timer>
              <HeadingOne>56</HeadingOne>
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
