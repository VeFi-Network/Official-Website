import React from "react";
import styled from "styled-components";
import { HeadingThree, Paragraph } from "../countdown/CountDown.styled";

export const StyledSteps = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
export const StyledStepsLogo = styled.div`
  font-size: 50px;
`;
export const StyledStepsHeading = styled.div`
  height: 100px;
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
`;
export const StyledStepsDesc = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Steps = ({ icon, title, desc }) => {
  return (
    <StyledSteps>
      <StyledStepsLogo>{icon}</StyledStepsLogo>
      <StyledStepsHeading>
        <HeadingThree>{title}</HeadingThree>
      </StyledStepsHeading>
      <StyledStepsDesc>
        <Paragraph>{desc}</Paragraph>
      </StyledStepsDesc>
    </StyledSteps>
  );
};

export default Steps;
