import { Container } from "@material-ui/core";
import React from "react";
import { CircleStyled } from "../styles/Position.styled";
import styled from "styled-components";
import backgroundImage from "../../assets/images/banner.svg";
import Media from "../../utility/Media";
import arrow_right from "../../assets/images/arrow_right.svg";
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
    position: absolute;
    right: -100px;
    width: 100px;
  }
  ${Media.mobile`
    .imageBox {
      display:flex;
      justify-content:center;
      position: relative;
      text-align:center;
      margin-top:50px;
      margin-left:20px;
      img{
        height:100px;
      }
    }
    
`}
  ${Media.small`
    height:100%;
`}
`;
const StyledBannerContainer = styled.div`
  width: 500px;
  margin-top: 50px;
  position: relative;

  ${Media.mobile`
    width:100%;
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
          <div className="imageBox">
            <img src={arrow_right} alt="" />
          </div>
        </StyledBannerContainer>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
