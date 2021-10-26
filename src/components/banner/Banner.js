import { Container } from "@material-ui/core";
import React from "react";
import { CircleStyled } from "../styles/Position.styled";
import styled from "styled-components";
import backgroundImage from "../../assets/images/banner.svg";
import Media from "../../utility/Media";
import arrow_right from "../../assets/images/arrow.svg";
const StyledBanner = styled.section`
  padding-top: 60px;
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
    font-size: 48px;
  }

  .imageBox {
    position: absolute;
    right: -100px;
    width: 100px;
  }
  ${Media.mobile`
  padding-top: 0px;
  .imageBox {
    left:calc(50% - 50px);
    bottom:0;
    top:48vh;
    img{
      height:70px;
    }
  }
    
`}
  ${Media.small`
    height:100%;
    .imageBox{
      top:47vh;
    }
`}
`;
const StyledBannerContainer = styled.div`
  width: 500px;
  margin-top: 50px;
  position: relative;

  ${Media.mobile`
    display: flex;
    height:52vh;
    align-items:center;
    width:100%;
    overflow-wrap: break-all;
    padding-top: 20px;
    h1{
      font-size:45px;
      line-height:1.3em;
    }
    .imageBox{
      
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
