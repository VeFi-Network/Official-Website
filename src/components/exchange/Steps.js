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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.mobile`
    background:white;
    box-shadow:0px 0px 10px rgba(0,0,0,0.10);
    color:#131313;
    padding:20px;
    width:100%;
    margin:20px 0px;
    background:white;
    border-radius:10px;
  `}
`;

export const StyledStepsLogo = styled.div`
  font-size: 30px;
  ${media.mobile`
    font-size:50px;
    font-weight:600;
  `}
`;
export const StyledStepsHeading = styled.div`
  height: 80px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    max-width: 10ch;
    margin-bottom: 20px;
  }
  ${media.mobile`
    h3{
      font-size:34px;
      line-height:1em;
      font-weight:700;
    }
`}
`;
export const StyledStepsDesc = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    max-width: 25ch;
  }
  ${media.mobile`
 p{
   font-size:18px;
   font-weight:600;
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
