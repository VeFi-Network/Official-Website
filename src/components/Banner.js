import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/about_banner.png";
import Timer from "./Timer";
import { P } from "./Typography";
import media from "../utility/Media";
const StyledBanner = styled.section`
  padding-top: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  height: 350px;
  background: url(${backgroundImage}) no-repeat, rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-size: cover;
  position: relative;
  flex-direction: column;

  .text__color {
    margin-top: 50px;
    color: white;
  }
  ${media.mobile`
    height:400px;

    .text__color{
      color:white;
      font-size:30px;

    }
  `}
`;
const Overlay = styled.div`
  position: absolute;
  background: #000;
  top: calc(280px - 60px);
  right: 0;
  margin-right: 50px;
  width: 450px;

  ${media.mobile`
    position:relative;
    top:0px;
    width:100%;
    margin:0px;
    margin-top:20px;
    padding-top:20px;
    h1{
      font-size:35px;
    }
    button{
      font-size:20px;
    }
  `}
`;
const Banner = ({ text }) => {
  return (
    <StyledBanner>
      <Container maxWidth="md">
        <P size="40px" className="text__color">
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
