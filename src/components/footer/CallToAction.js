import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { P } from "../Typography";
import media from "../../utility/Media";
export const StyledCallToAction = styled.div`
  display: flex;
  background: ${({ bg }) => bg || "#fbf6b4"};
  height: 50px;
  padding: 20px 0px;
  color: #000;
  align-items: center;
  text-align: center;

  p {
    font-weight: 600;
  }

  ${media.mobile`
    margin-top:10px;
    margin-bottom:10px;
    padding:40px 0px;
    p{
      font-size:20px;
      max-width:30ch;
    }
  `}
`;
const CallToAction = () => {
  return (
    <StyledCallToAction bg="#fbf6b4">
      <Container>
        <P>Need help? Call our support team @ +234 906 680 9425</P>
      </Container>
    </StyledCallToAction>
  );
};

export default CallToAction;
