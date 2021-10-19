import styled from "styled-components";

export const StyledHeroBanner = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  background: ${({ bg }) => bg || "#FEFCEA"};
`;

export const QuoteLeft = styled.div`
  width: 200px;
  position: absolute;
  left: 50%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: -40px;
    margin-left: 10px;
  }
`;

export const QuoteRight = styled.div`
  width: 200px;
  position: absolute;
  left: 50%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 460px;
    margin-left: -600px;
  }
`;

export const HeroBannerContainer = styled.div`
  margin: 30px 0px 0px 0px;
  display: flex;
  width: 100%;
  position: relative;

  > div:nth-child(1) {
    > img {
      object-fit: contain;
      height: 550px;
      max-width: none !important;
    }
  }
`;

export const HeroBannerJoinCommunity = styled.div`
  width: 673px;
  padding: 70px;
  background: black;
  color: ${({ color }) => color || "#FFF"};
  margin-left: -150px;
  height: 550px;
  border-radius: 50px;
  margin-top: 50px;

  h1 {
    font-size: 65px;
  }
  h3 {
    font-size: 65px;
    margin-bottom: 30px;
  }
  p {
    line-height: 1.3em;
    font-size: 25px;
    font-weight: 200;
  }
  > h1 > span {
    padding: 30px 20px !important;
    color: #fbf6b4;
  }
  button {
    margin-top: 30px;
  }
`;
