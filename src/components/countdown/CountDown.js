import { Container } from "@material-ui/core";
import React from "react";
import {
  CountDownCenter,
  StyledCountDown,
  HeadingThree,
  HeadingOne,
  Paragraph,
  CounterContainer,
  CounterTimerBox,
  Timer,
  WaitList,
  Btn,
} from "./CountDown.styled";

const CountDown = () => {
  return (
    <StyledCountDown>
      <Container>
        <CountDownCenter>
          <HeadingThree>The next big thing in</HeadingThree>
          <HeadingOne>Blockchain</HeadingOne>
          <Paragraph>
            The next big thing in Blockchain when high speed meets
          </Paragraph>
          <Paragraph>
            Scalability. VSC ensures high speed and more than lower
          </Paragraph>
          <Paragraph>
            transaction fees under large volumnes of transaction.
          </Paragraph>
          <CounterContainer>
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
        </CountDownCenter>
      </Container>
    </StyledCountDown>
  );
};

export default CountDown;
