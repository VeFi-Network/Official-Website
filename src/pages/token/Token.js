import { Container } from "@material-ui/core";
import React from "react";
import { Button } from "../../components/Button";
import { Timer } from "../../components/CountDown";
import { SectionWrapper } from "../../components/Section";
import { H1, P } from "../../components/Typography";
import { FaCheckCircle } from "react-icons/fa";

import SEO from "../../seo";
import {
  StyledTokenCounterTimerBox,
  StyledTokenSalesContainer,
  StyledTokenSalesCountDownContainer,
  StyledTokenSalesDesc,
  StyledTokenSaleStat,
  StyledTokenSaleWrapper
} from "./Token.styled";
import Countdown from "react-countdown";
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return "countdown completed";
  } else {
    // Render a countdown
    return (
      <>
        <StyledTokenCounterTimerBox>
          <Timer>
            <H1 size="4rem !important">{days}</H1>
            <span>Days</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1 size="4rem !important">{hours}</H1>
            <span>Hours</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1 size="4rem !important">{minutes}</H1>
            <span>Min</span>
          </Timer>
          <span>:</span>
          <Timer>
            <H1 size="4rem !important">{seconds}</H1>
            <span>Sec</span>
          </Timer>
        </StyledTokenCounterTimerBox>
      </>
    );
  }
};
const Token = () => {
  return (
    <>
      <SEO title="Buy VEF Token" />
      <SectionWrapper>
        <Container>
          <StyledTokenSalesContainer>
            <StyledTokenSaleWrapper>
              <div>
                <StyledTokenSalesCountDownContainer>
                  <H1 size="2.5rem" fw="normal">
                    Our seed sale starts in
                  </H1>
                  <Countdown date={"2021-12-31"} renderer={renderer} />

                  <StyledTokenSaleStat>
                    <p>VEF sold</p>
                    <div className="box"></div>
                    <div className="progress">
                      <span>0 vef</span>
                      <span>50m vef</span>
                      <span>100m vef</span>
                      <span>150m vef</span>
                    </div>
                  </StyledTokenSaleStat>
                  <Button bg="#1673B9" label="Purchase VEF Token" />
                </StyledTokenSalesCountDownContainer>
              </div>
              <div>
                <StyledTokenSalesDesc>
                  <H1 size="2.8rem" lh="1.2em">
                    Our ICO program for the VEF token will aid in setting the standard the VEFI ecosystem is aiming for.
                  </H1>
                  <P size="1.6rem">
                    We are currently opening our ICO for VEF token, with all funds going directly to the development of
                    the technical arm of the VEFI ecosystem.
                  </P>
                  <ul>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Current token prize: $0.02</span>
                    </li>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Min purchase: $50</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Next token prize: $1.75</span>
                    </li>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Max purchase: $100,000</span>
                    </li>
                  </ul>
                </StyledTokenSalesDesc>
              </div>
            </StyledTokenSaleWrapper>
          </StyledTokenSalesContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Token;
