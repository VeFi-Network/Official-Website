import styled from "styled-components";
import circle_yellow from "../assets/images/circle_yellow.svg";
import backgroundImage from "../assets/images/banner.svg";
import circle from "../assets/images/circle.svg";
import steps_bg from "../assets/images/steps_bg.png";
import rec from "../assets/images/map.png";
import bg from "../assets/images/steps_bg.png";
import double_coin from "../assets/images/double_coin.svg";
import media from "../utility/Media";
export const SectionWrapper = styled.section`
  padding-top: 60px;
  width: 100%;

  .countdownContainer {
    width: 100%;
    position: relative;

    .BannerSectionCountdown {
      position: absolute;
      right: 0;
      top: -100px;
      margin-right: 50px;
    }
  }
  ${media.mobile`
      .countdownContainer{
        width:100%;

        .BannerSectionCountdown{
          position:relative;
          margin:0px;
          top:0px;
        }
      }
  `}
  ${media.small`
  .countdownContainer{
        width:100%;
        margin-top: 0px;
        .BannerSectionCountdown{
          position:relative;
          margin:0px;
          top:0px;
        }
      }
  `}
`;
export const SectionBanner = styled.div`
  width: 100%;
  background-image: url(${({ bg }) => bg || "#000"});
`;
export const SectionAppBar = styled.div`
  display: flex;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
`;

export const SectionCard = styled(Section)`
  margin: 30px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 0 0 31%;
  background: url(${steps_bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px 10px;
  text-align: center;
  color: whitesmoke;
  padding: 20px 30px;

  span:nth-child(1) {
    margin-bottom: 10px;
  }
  span:nth-child(2) {
    h2 {
      margin: 10px 0px;
    }
  }
  span:nth-child(3) {
    white-space: wrap;
  }

  ${media.mobile`
    color:#131313;
    flex:0 0 100%;
    background:#fff;
  `}
  ${media.small`
  flex:0 0 100%;
    color:#131313;
    background:#fff;
  `}
`;

export const SectionBannerWithBg = styled(SectionBanner)`
  height: ${({ height }) => (height ? height : "250px")};
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  padding-top: 50px;
  color: #fff;

  ${media.mobile`
    background-position: left;
    height:100%;
  `}

  ${media.small`
    background-position: left;
    height:100%;
  `}
`;

export const SectionTypographyContainer = styled.div`
  white-space: pre-line;
  margin-left: 20px;
  p {
    margin-top: 20px;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "32ch")};
  }
  span {
    color: #fbf6b4;
    background: url(${circle_yellow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px 30px;
    margin: 0px -10px;
  }

  ${media.mobile`
    width:100%;
    margin:0px;

    h2{
      max-width:11ch;
      font-size:38px;
    }
    p{
      max-width:60ch;
      font-weight:normal;
      font-size:20px;
    }
  `}

  ${media.small`
    width:100%;
    margin:0px;
    h2{
      max-width:11ch;
      font-size:38px;
    }
    p{
      max-width:60ch;
      font-weight:normal;
      font-size:20px;
    }
  `}
`;

export const SectionCountDownTimerContainer = styled.div`
  width: 500px;
  height: 200px;
  background: #1673b9;
  display: flex;
  justify-content: center;
  float: right;
  padding: 10px 30px;
  bottom: 30px;
  position: relative;

  ${media.mobile`
    width:115%;
    height:auto;
    bottom:0;
    margin-right:-20px;
    margin-top:30px;
    margin-bottom:30px;
    z-index:10;
    top:-35px;
  `}

  ${media.small`
    width:110%;
    height:auto;
    bottom:0;
    margin-right:-15px;
    margin-top:30px;
    margin-bottom:30px;
    z-index:10;
    top:-35px;
  `}
`;

export const SectionTimer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const SectionCountdown = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;
  align-items: center;
  span {
    color: #fefcea;
    font-size: 12px;
  }
`;

export const SectionTime = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile`
    h3{
        font-size:24px;
    }
  `}
  ${media.small`
  h3{
      font-size:20px;
  }
`}
`;

export const SectionCountDownButton = styled.div`
  display: flex;
  justify-content: center;

  > button {
    margin: 10px 10px;
    padding: 8px 20px;
    cursor: pointer;
  }

  ${media.mobile`
    > button {
        margin: 10px 10px 20px 10px;
        padding: 10px 25px;
        cursor: pointer;
        font-size:16px;
    }
`}
  ${media.small`
    > button {
        margin: 10px 10px 20px 10px;
        padding: 10px 15px;
        cursor: pointer;
        font-size:14px;
        letter-spacing:1px;
        font-weight:600;
    }
`}
`;

export const SectionHeadingContainer = styled.div`
  .sectionAppBar {
    margin-top: 150px;
    text-align: center;
    ${media.mobile`
      margin-top:0px;
      margin-top:25px;
    `}
    ${media.mobile`
      margin-top:0px;
      margin-top:25px;
    `}
  }
  .left {
    margin: 30px 0px;
    display: flex;
    width: 100%;
    padding: 15px 0px;
    border-radius: 3px;
    color: #131313;
    justify-content: center;
    align-items: center;
  }
  ${media.mobile`
    .left{
      text-align:left; 
      padding:20px;
    }
    .MuiContainer-root{
        width:100%;
        padding:0px;
        margin:0px;
        .SectionCard{
            background:#eee;
            padding:10px;
        }
    }
  `}
  ${media.small`
  .left{
      text-align:center; 
      padding:20px;
    }
    .MuiContainer-root{
        width:100%;
        padding:0px;
        margin:0px;
        .SectionCard{
            background:#eee;
            padding:10px;
        }
    }
  `}
`;

export const SectionHeading = styled(Section)`
  margin: 30px 0px;
  display: flex;
  width: 100%;
  padding: 15px 0px;
  border-radius: 3px;
  color: #131313;
  justify-content: center;
  align-items: center;
  text-align: ${({ align }) => align || "center"};

  .sectionAppBar {
    background: green !important;
  }
  ${media.mobile`
    margin-top: 0px;
    padding:20px;
    box-shadow: none;
    h1{
      font-size:1.1rem;
      }
  `}

  ${media.small`
    margin-top: 0px;
    padding:15px;
    box-shadow: none;
    
    margin-left:14px;
    h1{
      font-size:1.1rem;
      }
  `}
`;

export const SectionImageContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 0 1 32%;
  }

  ${media.mobile`
    padding:0px 20px;
    width:100%;
    > *{
      flex:0 0 100%;
    }
  `}
`;

export const SectionPrivacyContainer = styled(SectionHeadingContainer)`
  .container {
    text-align: left;
    background: #fff;
    border-radius: 20px;
    padding: 75px;
    .appBar {
      text-align: left;
      justify-content: flex-start;
      margin: 10px 0px;
      h1 {
        color: #1d1e2c;
        font-size: 45px;
        margin: 40px 0px;
      }
    }
    p,
    div {
      color: #1d1e2c;
      font-size: 15px;
      font-weight: normal;
      margin: 10px 0px;
      max-width: 100ch;
      line-height: 0.92rem;

      ul {
        li {
          padding: 8px 0px;
        }
      }
    }
    div > blockquote {
      margin: 20px 0px !important;
    }
  }
  padding-bottom: 80px;
  padding-top: 150px;

  ${media.mobile`
    padding:0px 30px;
    .container{
      margin:20px 0px;
      padding:10px 20px;

      .appBar {
        h1 {
          color: #1d1e2c;
          font-size: 30px;
        }
      }
    }
    
  `}
  ${media.small`
    padding:0px 30px;
    .container{
      margin:20px 0px;
      padding:10px 20px;

      .appBar {
        h1 {
          color: #1d1e2c;
          font-size: 30px;
          line-height:1.3rem;
        }
      }
    }
  `}
`;
export const StyledSubscribe = styled.section`
  display: flex;
  width: 100%;

  ${media.mobile`
    background: #fefcea;
  `}
`;
export const SubscribeFormText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;

  ${media.mobile`
    width:100%;
    text-align:center;
  `}
  ${media.small`
    width:100%;
  `}
`;
export const SubscribeContainer = styled.div`
  display: flex;
  width: 100%;
  div {
    flex: 0.5;
  }
  .mobile {
    text-align: center;
  }
  ${media.mobile`
    display:flex;
    flex-direction:column;
    .mobile{
      display:none;
    }
  `}
  ${media.small`
    display:flex;
    flex-direction:column;
    .mobile{
      display:none;
    }
  `}
`;
export const SubscribeFormContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1em;
    max-width: 28ch;
    font-family: "Open Sans", sans-serif;
    color: #383838;
  }
  h3 {
    font-size: 24px;
    font-weight: 400;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    color: #161525;
  }

  .subscribeFOrm {
    width: 380px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    padding: 5px;
    margin: 0px;
    margin-top: 10px;

    input {
      width: 100%;
      padding: 8px 10px;
      outline: none;
      border: none;
      background: transparent;
      margin-right: 10px;
      font-weight: 600;
    }
    button {
      padding: 3px 20px;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  ${media.mobile`
    h1{
      font-size:24px;
      overflow-wrap: break-all;
      font-weight:400;
    }
    h3{
      font-size:26px;
    }
    .subscribeFOrm{
      width:100%;
      padding: 10px;
      display:flex;
      input{
        font-weight:400;
        font-size:14px;
        color:#131313;
        padding:10px;
        letter-spacing:2px;
      }
      button{
        color:#fff;
        padding:0px 10px;
        border-radius:5px;
        font-size:18px;
        text-transform:lowercase;
        font-weight:400;
        letter-spacing:2px;
      }
    }
  `}
  ${media.small`
    h1{
      font-size:20px;
      overflow-wrap: break-word;
      font-weight:400;
    }
    h3{
      font-size:24px;
    }
    .subscribeFOrm{
      width:100%;
      padding: 10px;

      input{
        font-weight:400;
        font-size:14px;
        color:#131313;
        padding:10px;
      }
    }
  `}
`;
export const StyledBanner = styled.section`
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
    max-width: 22ch;
  }

  .imageBox {
    position: absolute;
    right: calc(100vw - 50%);
    width: 100px;
  }
  ${media.mobile`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    .imageBox {
      display:none;
    }
    h1{
      max-width: 12ch;
      margin-top:-40px;
    }
`}
  ${media.small`
    .imageBox{
      display:none;
    }
    h1{
      max-width: 12ch;
      margin-top:-40px;
    }
`}
`;
export const StyledBannerContainer = styled.div`
  position: relative;

  .HeaderBannerButtonContainer {
    display: flex;
    margin: 30px 0px;
    a {
      text-decoration: none;

      button {
        background: transparent;
        border: 1px solid #1673b9;

        transition: all 0.3s ease-in-out;
        &:hover {
          color: #000;
          border-color: #000;
        }
      }
    }
    button {
      margin: 10px;
      padding: 15px 20px;
      width: 200px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #000;
        border-color: #000;
      }
    }
  }

  ${media.mobile`
    display: flex;
    width:100%;
    padding-left:30px;
    flex-direction:column;
    padding-top:80px;
    align-items: flex-start;
    
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
    .HeaderBannerButtonContainer {

      button {
        margin-left:0px;
        padding: 15px 20px;
        width: 100%;
        font-size: 14px;
    }
  }
`}

  ${media.small`
  .imageBox{
    margin-top:0px;
  }
  .HeaderBannerButtonContainer {
      button {
        margin-left:0px;
        padding: 15px 10px;
        width: 100%;
        font-size: 1rem;
    }
  }
`}
`;
export const Left = styled.div`
  flex: ${({ size }) => size || 0.5};

  ${media.mobile`
    width:100%;
`}
`;

export const Right = styled.div`
  flex: ${({ size }) => size || 0.5};
  position: relative;
`;

export const CircleStyled = styled.span`
  background: url(${circle});
  background-size: contain;
  padding: 20px 10px;
  background-position: left;
`;

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
    padding: 30px 35px;
    margin-left: -20px;
  }
  a {
    text-decoration: none;
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
      font-size: 26px;
      margin-bottom:5px;
      white-space:nowrap;
      max-width: 30ch;
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
      margin-left:-10px;
      margin-right:-1px;
      padding:15px 17px;
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
export const HeroBannerCircleStyled = styled.span`
  background-image: url(${circle_yellow});
  background-size: contain;
  padding: 20px 0px;
  background-position: center;
  background-repeat: no-repeat;
  color: #fbf6b4;
`;
export const StyledFeatures = styled.div`
  margin-top: 40px;
  display: flex;
  h1 {
    font-size: 50px;
    > span {
      font-size: 45px;
    }
  }

  ${media.mobile`
    width:100%;
    display:flex;
    flex-direction:column;
    h1{
      font-size:40px;
      margin-left:5px;
      > span {
        font-size: 35px;
      }
    }
  `};

  ${media.small`
    width:100%;
    display:flex;
    flex-direction:column;

    h1{
      font-size:40px;
      margin-left:5px;
      > span {
        font-size: 35px;
      }
    }
  `};
`;

export const Box = styled.div`
  margin: 30px 10px;
  width: ${({ width }) => width || "100%"};

  > p {
    font-size: 24px;
    font-weight: 400;
    max-width: 48ch;
  }

  ${media.mobile`
    width:100%;
    white-space:wrap;
    margin-top:10px;
    >p{
      font-size:18px;
      text-align:left;
      font-weight:500;
      line-height:1.5em;
      max-width: 34ch;
    }
  `};

  ${media.small`
    > p{
      font-size:18px;
      max-width: 30ch;
    }
  `}
`;

export const StyledFeature = styled.div`
  button {
    margin: 5px 10px;
    background: #fafafa;
    color: #333;
    text-transform: inherit;

    &:hover {
      background: #fafafa;
    }
  }

  ${media.mobile`
    margin:0px;
    margin-bottom:10px;
  `}

  ${media.small`
    button{
      background:inherit;
    }
  `}
`;

export const StyledFeatureRight = styled.div`
  width: 100%;
  display: flex;
`;

export const FeaturedRightImage = styled.div`
  margin-top: -180px;
  position: absolute;
  top: 0;

  .walletApp {
    width: 450px;
    height: 450px;
    object-fit: contain;
    margin-top: -220px;
  }
  ${media.mobile`
    margin-top: 0px;
    .walletApp{
      display:none;
    }
  `}
`;

export const AppMockUp = styled.div`
  position: relative;
  height: 400px;

  img {
    width: 500px;
    height: 500px;
    object-fit: contain;
    position: relative;
    margin-top: -10px;
    margin-left: 30px;
  }

  ${media.mobile`
    img{
      margin:0px;
      padding-bottom:10px;
    }
  `}
`;
export const StyledSectionContainer = styled(Right)`
  h1 {
    color: #fbf6b4;
    font-size: 55px;
  }
  p {
    font-weight: 300;
    font-size: 22px;
    color: white;
    line-height: 1.1em;
    max-width: 50ch;
    margin-left: 8px !important;
  }
  .mobileText {
    display: none;
  }

  ${media.mobile`

    .mobileText{
      width:auto;
      display:flex;
      white-space:wrap;
      margin-bottom:5px;
      padding:0px 20px;
      line-height:1.3em;
    }
    h1{
      margin-left:8px;
      font-size:1.8rem;
      span{
        font-size:1.5rem;
      }
    }
    .button {
    background:inherit;
  }
  
  `}
  ${media.small`
  h1{
    margin-left:0px;

    span{
      font-size:40px;
    }
  }
  .mobileText{
    width:auto;
    display:flex;
    white-space:wrap;
    margin-bottom:5px;
    padding:0px 10px;
  }
  .button {
    text-overflow:wrap;
    .MuiButton-startIcon {
      margin-right: 0px;
    }
  }

  `}
`;
export const StyledExchange = styled.section`
  width: 100%;
  background: url(${rec}) no-repeat, #0f154a;
  display: flex;
  background-position: left;
  background-size: contain;
  background-blend-mode: darken;
  color: #fff;

  ${media.mobile`
    background:none;
    background-position: right;
  `}
`;

export const ExchangeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 60px 0px;
  padding-bottom: 70px;

  h1 {
    margin-top: 70px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.3em;
    margin-left: 25px;
  }
  div > img {
    width: 350px;
    height: 450px;
    margin-bottom: -50px;
    object-fit: contain;
  }

  .desktop,
  .arrow {
    display: none;
  }
  ${media.mobile`
    width:100%;
    display:flex;
    flex-direction:column-reverse;
    margin-top:-30px;
    margin-bottom:-40px;
    color:#131313;
    .deskToptext{
      display:none;
    }
    .arrow{
      margin:20px 0px;
      display:flex;
      align-items:center;
      text-align:center;
      justify-content:center;

      img{
        width:60px;height:60px;object-fit:contain;
      }
    }
    .desktop{
      display:flex;
      width:100%;
      margin-top:40px;
      justify-content:center;
      
      img{
   
        width:100px;
        height:50%;
        object-fit:contain;
        margin:20px 20px;
      }
    }
    .mobileText{
      display:block;
      font-size:18px;
      font-weight:400;
      color:#131313;
      margin-left:0px;
    }
    h1{
      font-size:2rem;
      margin-left:20px;
      color:#131313 !important;

      span{
        font-size:1.4rem;
      }
    }

    div > img{
      width:450px;
    }
`}
`;
export const StyledHowItWorks = styled.section`
  width: 100%;
  display: flex;
  background: url(${double_coin}) no-repeat, #fbf6b4;
  display: flex;
  flex-direction: column;
  background-position: right;
  background-size: right;
  background-blend-mode: screen;
  background-size: contain;
  color: #fff;
  padding-bottom: 60px;

  ${media.mobile`
    display:flex;
    width:100%;
    background:#fff;
    background-position:center;
    background-blend-mode: darken;
  `}
`;

export const HowItWorksContainer = styled.div`
  width: 100%;
  color: #fff;
  height: auto;
  margin-top: -60px;
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
  background: url(${bg}) no-repeat;
  background-position: right;
  background-size: cover;

  hr {
    background-color: #fff !important;
  }

  ${media.mobile`
    width:100%;
    display:flex;
    margin:0px;
    background-image:none;
    flex-direction:column;
    height:auto;
    flex-direction:column;
  `}
  ${media.small`
    width:100%;
    display:flex;
    margin:0px;
    background-image:none;
    flex-direction:column;
    height:auto;
    flex-direction:column;
  `}
`;

export const FloatContainerRight = styled.div``;
export const FloatContainerLeft = styled.div``;

export const Content = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledLayout = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row-reverse;
  div {
    display: flex;
    background: yellow;
    padding-bottom: 20px;
    flex-direction: column;
  }
`;
export const RightAlign = styled.div`
  display: flex;
  flex: 0.4;
  width: 100%;
  flex-direction: column;
`;

export const RightAlignText = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2em;
  }
`;

export const RightAlignForm = styled.div`
  h3 {
    font-weight: 600;
    font-size: 18px;
  }
  div {
    width: 90%;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input {
    width: 79%;
    padding: 15px 10px;
    border: none;
    background: transparent;
    outline: none;
  }
  button {
    border: none;
    background: black;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    text-transform: lowercase !important;

    &:hover {
      background: #000;
    }
  }
`;

export const LeftAlign = styled.div`
  display: flex;
  flex: 0.5;
  width: 100%;
  justify-content: center;
  margin-right: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;
