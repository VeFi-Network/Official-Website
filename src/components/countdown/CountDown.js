import { Container } from "@material-ui/core";
import React from "react";
import { H1, H3, P } from "../Typography";
import { CountDownCenter, StyledCountDown } from "./CountDown.styled";
import CountDownTimer from "./CountDownTimer";

const CountDown = () => {
  return (
    <StyledCountDown>
      <Container>
        <CountDownCenter>
          <H3 size="30px">The next big thing in</H3>
          <H1 size="80px">Blockchain</H1>
          <P size="24px">
            The next big thing in Blockchain when high speed meets
          </P>
          <P size="24px">
            Scalability. VSC ensures high speed and more than lower
          </P>
          <P size="24px">
            transaction fees under large volumnes of transaction.
          </P>
          <CountDownTimer />
        </CountDownCenter>
      </Container>
    </StyledCountDown>
  );
};

export default CountDown;
