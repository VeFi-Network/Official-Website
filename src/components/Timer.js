import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { H1, P } from "./Typography";

export const StyledTimer = styled.div`
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
`;

export const CounterContainer = styled.div`
  width: 100%;
  display: flex;
  color: #fbf6b4;
  justify-content: center;
  background: ${({ bg }) => bg || "black"};
  height: 200px;
  padding: 0px 20px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
      margin-top: 15px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    background-color: ${({ bg }) => bg || "#fbf6b4"};
    color: ${({ color }) => color || "#333"};
    margin-left: 20px;
    padding: 10px 20px;
  }
`;

export const CounterTimerBox = styled.div`
  width: 100%;
  color: #fff;
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;
`;

const Timer = () => {
  return (
    <>
      <CounterContainer bg="black">
        <div>
          <P>Pre-Sale ICO starts in</P>
          <CounterTimerBox>
            <StyledTimer>
              <H1 color="fbf6b4">46</H1>
              <span>Days</span>
            </StyledTimer>
            <span>:</span>
            <StyledTimer>
              <H1 color="fbf6b4">12</H1>
              <span>Hours</span>
            </StyledTimer>
            <span>:</span>
            <StyledTimer>
              <H1 color="fbf6b4">05</H1>
              <span>Min</span>
            </StyledTimer>
            <span>:</span>
            <StyledTimer>
              <H1 color="fbf6b4">56</H1>
              <span>Sec</span>
            </StyledTimer>
          </CounterTimerBox>
          <ButtonContainer>
            <Button bg="#fbf6b4" text="read more" />
            <Button bg="#fbf6b4" text="join the waitlist" />
          </ButtonContainer>
        </div>
      </CounterContainer>
    </>
  );
};

export default Timer;
