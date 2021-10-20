import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/about_banner.png";
import Timer from "./Timer";
import { P } from "./Typography";

const StyledBanner = styled.section`
  padding-top: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  height: 350px;
  margin-bottom: 100px;
  background: url(${backgroundImage}) no-repeat, rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-size: cover;
  position: relative;
  flex-direction: column;

  p {
    margin-top: 40px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background: red;
  top: calc(280px - 60px);
  right: 0;
  margin-right: 50px;
  width: 450px;
`;
const Banner = ({ text }) => {
  return (
    <StyledBanner>
      <Container maxWidth="md">
        <P size="40px" color="#fefcea">
          {text}
        </P>
      </Container>
      <Overlay>
        <Timer />
      </Overlay>
    </StyledBanner>
  );
};

export default Banner;
