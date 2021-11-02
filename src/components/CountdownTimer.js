import React from "react";
import {
  SectionCountDownTimerContainer,
  SectionTimer,
  SectionCountdown,
  SectionTime,
  SectionCountDownButton
} from "../components/Section";
import { StyledButton } from "../components/Button";
import { H3, P } from "../components/Typography";
const CountdownTimer = () => {
  return (
    <SectionCountDownTimerContainer>
      <SectionTimer>
        <P size="24px">Pre-Sale ICO starts in</P>
        <SectionCountdown>
          <SectionTime>
            <H3 size="34px" FontColor="#fefcea" FontWeight="600">
              46
            </H3>
            <P size="14px" FontColor="#fefcea" FontWeight="500">
              Days
            </P>
          </SectionTime>
          <span>:</span>
          <SectionTime>
            <H3 size="34px" FontColor="#fefcea" FontWeight="600">
              12
            </H3>
            <P sixe="14px" FontColor="#fefcea" FontWeight="500">
              Hours
            </P>
          </SectionTime>
          <span>:</span>
          <SectionTime>
            <H3 size="34px" FontColor="#fefcea" FontWeight="600">
              05
            </H3>
            <P size="14px" FontColor="#fefcea" FontWeight="500">
              Min
            </P>
          </SectionTime>
          <span>:</span>
          <SectionTime>
            <H3 size="34px" color="#fefcea" FontWeight="600">
              56
            </H3>
            <P size="14px" color="#fefcea" FontWeight="500">
              Sec
            </P>
          </SectionTime>
        </SectionCountdown>
        <SectionCountDownButton>
          <StyledButton bg="#FBf6B4" fontColor="#000">
            Whitepaper
          </StyledButton>
          <StyledButton bg="#FBf6B4" fontColor="#000">
            Join The Waitlist
          </StyledButton>
        </SectionCountDownButton>
      </SectionTimer>
    </SectionCountDownTimerContainer>
  );
};

export default CountdownTimer;
