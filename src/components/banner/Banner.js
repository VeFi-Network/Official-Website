import { Container } from "@material-ui/core";
import React from "react";
import { CircleStyled } from "../styles/Position.styled";
import styled from "styled-components";
import backgroundImage from "../../assets/images/banner.svg";
import Media from "../../utility/Media";
const StyledBanner = styled.section`
  padding-top: 60px;
  width: 100%;
  display: flex;
  height: 500px;
  align-items: center;
  background: url(${backgroundImage}) no-repeat;
  background-blend-mode: darken;
  background-size: cover;
  position: relative;
  flex-direction: column;

  h1 {
    font-size: 48px;
  }

  .imageBox {
    background: red;
    position: absolute;
    right: 0;
  }
  ${Media.mobile`
    .imageBox {
      display:flex;
      justify-content:center;
      background: green;
      position: relative;
      text-align:center;
      margin-top:20px;
    }
    
`}
  ${Media.small`
    height:100vh;
`}
`;
const StyledBannerContainer = styled.div`
  width: 500px;
  margin-top: 50px;
  position: relative;

  ${Media.mobile`
    width:100%;
    background:red;
    overflow-wrap: break-word;
    margin-top: 80px;
    h1{
      font-size:40px;
    }
    .imageBox{
      display:flex;
    }
`}
  ${Media.small`
    background:green;
    h1{
      font-size:35px;
    }
`}
`;
const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <StyledBannerContainer>
          <h1>
            Revolutionizing Innovation in Blockchain Technology from{" "}
            <CircleStyled>Africa</CircleStyled>
            to the World.
          </h1>
          <div className="imageBox">ok</div>
        </StyledBannerContainer>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
