import React from "react";
import styled from "styled-components";
import media from "../../utility/Media";
import { H3, P } from "../Typography";

export const StyledSteps = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;

  ${media.mobile`
    background:white;
    box-shadow:0px 0px 8px rgba(0,0,0,0.15);
    color:#000;
    padding:20px;
    width:100%;
    margin:20px 0px;
  `}
`;

export const StyledStepsLogo = styled.div`
  font-size: 50px;
  ${media.mobile`
    font-size:80px;
    font-weight:600;
  `}
`;
export const StyledStepsHeading = styled.div`
  height: 100px;
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
  ${media.mobile`
    height:70px;

    h3{
      font-size:30px;
      line-height:1em;
    }
`}
`;
export const StyledStepsDesc = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
  }
  ${media.mobile`
 p{
   font-size:20px;
   font-weight:400;
   padding-bottom:20px;
 }
`}
`;

const Steps = ({ icon, title, desc }) => {
  return (
    <StyledSteps>
      <StyledStepsLogo>{icon}</StyledStepsLogo>
      <StyledStepsHeading>
        <H3>{title}</H3>
      </StyledStepsHeading>
      <StyledStepsDesc>
        <P>{desc}</P>
      </StyledStepsDesc>
    </StyledSteps>
  );
};

export default Steps;
