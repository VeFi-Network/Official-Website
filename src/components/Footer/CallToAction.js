import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Paragraph } from "../countdown/CountDown.styled";

export const StyledCallToAction = styled.div`
  display: flex;
  background: red;
  height: 50px;
  padding: 20px 0px;
  color: #000;
  align-items: center;
  text-align: center;

  p {
    font-weight: 600;
  }
`;
const CallToAction = () => {
  return (
    <StyledCallToAction>
      <Container>
        <Paragraph>
          Need help? Call our support team @ +234 000 000 000
        </Paragraph>
      </Container>
    </StyledCallToAction>
  );
};

export default CallToAction;
