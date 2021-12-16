import React from "react";
import {
  CountdownContainer,
  CountdownProgressBar,
  CountdownTextWrapper,
  CountdownTimerWrapper,
  CountdownWrapper,
  Timer,
  CountdownHeading,
  CountdownBtn
} from "../styles/countdown/Countdown.styled";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "./index";
import { Heading } from "../styles/section/Section.styled";

const CountDown = ({ bg, border, bgColor, hoverBg }) => {
  return (
    <>
      <CountdownContainer>
        <CountdownWrapper bg={bg} border={border}>
          <CountdownTextWrapper>
            <CountdownHeading uppercase bold>
              Join Seed Sale
            </CountdownHeading>
            <CountdownHeading bold sm>
              VEF 3,575,000
            </CountdownHeading>
          </CountdownTextWrapper>
          <CountdownProgressBar>
            <LinearProgress variant="determinate" value={70} className="progress" />
          </CountdownProgressBar>
          <CountdownTextWrapper>
            <Heading fontColor="#fff">Total amount VEF 5,500,000</Heading>
          </CountdownTextWrapper>
          <CountdownTimerWrapper>
            <Timer>
              <span>30</span>
              <span>Days</span>
            </Timer>
            :
            <Timer>
              <span>21</span>
              <span>Hours</span>
            </Timer>
            :
            <Timer>
              <span>19</span>
              <span>Min</span>
            </Timer>
            :
            <Timer>
              <span>56</span>
              <span>Sec</span>
            </Timer>
          </CountdownTimerWrapper>
          <CountdownBtn>
            <Button bgColor={bgColor} hoverBg={hoverBg} fontColor="#fff" bold border label="Buy on Pinksale" />
          </CountdownBtn>
        </CountdownWrapper>
      </CountdownContainer>
    </>
  );
};

export default CountDown;
