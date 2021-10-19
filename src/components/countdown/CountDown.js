import { Container } from "@material-ui/core";
import React from "react";
import {
  CountDownCenter,
  StyledCountDown,
  HeadingThree,
  HeadingOne,
  Paragraph,
} from "./CountDown.styled";
import CountDownTimer from "./CountDownTimer";

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
          <CountDownTimer />
        </CountDownCenter>
      </Container>
    </StyledCountDown>
  );
};

export default CountDown;
