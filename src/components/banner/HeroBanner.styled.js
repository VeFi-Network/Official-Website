import styled from "styled-components";
import media from "../../utility/Media";
export const StyledHeroBanner = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  background: ${({ bg }) => bg || "#FEFCEA"};

  ${media.mobile`
    width:100%;
    flex-direction:column;
  
    .hideOnMobile{
      display:none
    }
  `}
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

  ${media.mobile`
    width:100%;
    flex-direction:column;
    background:none;
  `}
`;

export const QuoteRight = styled.div`
  width: 100px;
  z-index: 1;
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-top: 440px;
    margin-left: -800px;
    position: absolute;
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

  ${media.mobile`
    margin:0px;
    flex-direction:column;

    .imageMobile{
      width:90%;
      margin:0px auto -30px auto;
    }
    > div:nth-child(1) {
      > img {
        object-fit: contain;
        width:100%;
        height: 250px;
        border-radius:20px;
        max-width: none !important;
      }
    }
  `}
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
    max-width: 12ch;
  }
  p {
    line-height: 1.3em;
    font-size: 25px;
    font-weight: 200;
    margin: 30px 0px;
    max-width: 32ch;
  }
  > h1 > span {
    padding: 30px 35px !important;
    margin-left: -20px;
  }
  button {
    margin-top: 30px;
  }
  .mobileText {
    margin-left: -20px;
  }
  ${media.mobile`
    width:100%;
    margin-left:0px;
    border-radius:0px;
    margin-top: 0px;
    padding: 20px;
    height:100%;
    
    h1 {
      font-size: 27px;
      margin-bottom:5px;
      white-space:nowrap;
    }
    h3 {
      font-size: 28px;
      margin-bottom: 30px;
    }
    p {
      line-height: 1.3em;
      font-size: 16px;
      font-weight: 400;
      margin-top:30px;
    }
    > h1 > span {
      color: #fbf6b4;
      margin-left:-20px;
      margin-right:-1px;
    }
    button {
      padding:8px 30px;
      font-size:16px;
      font-weight:600;
    }
    .mobileText{
      color:white;
      font-size:27px;

    }
  `}
`;
