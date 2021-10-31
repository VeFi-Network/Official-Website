import { Container } from "@material-ui/core";
import React from "react";
import { CircleStyled } from "../styles/Position.styled";
import styled from "styled-components";
import backgroundImage from "../../assets/images/banner.svg";
import Media from "../../utility/Media";
import arrow_right from "../../assets/images/arrow.svg";
const StyledBanner = styled.section`
  padding-top: 100px;
  width: 100%;
  display: flex;
  height: 500px;
  align-items: center;
  background: url(${backgroundImage}) no-repeat;
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
  position: relative;
  flex-direction: column;
  h1 {
    font-size: 50px;
    max-width: 13ch;
  }

  .imageBox {
    position: absolute;
    right: calc(100vw - 50%);
    width: 100px;
  }
  ${Media.mobile`

  height:80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top: 0px;
  .imageBox {
    display:none;
    left:calc(50% - 50px);
    bottom:0;
    top:48vh;
    img{
      height:70px;
    }
  }
    h1{
      max-width: 13ch;
    }
`}
  ${Media.small`
    height:100vh;
    .imageBox{
      display:none;
    }
`}
`;
const StyledBannerContainer = styled.div`
  position: relative;

  ${Media.mobile`
    display: flex;
    align-items:center;
    width:100%;
    padding-left:30px;

    h1{
      font-size:36px;
      line-height:1.3em;
      span{
        background-repeat:no-repeat;
      }
    }
    .imageBox{
      margin-top:-35px;
    }
`}

  ${Media.small`
  .imageBox{
    margin-top:0px;
  }
`}
`;
const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <StyledBannerContainer>
          <h1>
            Revolutionizing Innovation in Blockchain Technology from<CircleStyled>Africa</CircleStyled>to the World.
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
