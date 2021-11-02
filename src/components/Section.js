import styled from "styled-components";
import circle_yellow from "../assets/images/circle_yellow.svg";
import steps_bg from "../assets/images/steps_bg.png";
import media from "../utility/Media";
export const SectionWrapper = styled.section`
  padding-top: 60px;
  width: 100%;

  .countdownContainer {
    width: 1200px;
    margin-top: -50px;
    color: #fefcea;
  }
  ${media.mobile`
      .countdownContainer{
        width:100%;
      }
  `}
  ${media.small`
  .countdownContainer{
        width:100%;
        margin-top: 0px;
      }
  `}
`;
export const SectionBanner = styled.div`
  width: 100%;
  background-image: url(${({ bg }) => bg || ""});
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
  flex: 0 1 10em;
  background: url(${steps_bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  margin: 10px 10px;
  text-align: center;
  color: #fff;
  padding: 20px 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.19);

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
    background:#fff;
    color:#131313;
  `}
`;

export const SectionBannerWithBg = styled(SectionBanner)`
  height: ${({ height }) => height || "250px"};
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  padding-top: 50px;
  color: #fff;

  ${media.mobile`
    background-position: left;
    height:70vh;
  `}

  ${media.small`
    background-position: left;
    height:90vh;
  `}
`;

export const SectionTypographyContainer = styled.div`
  white-space: pre-line;
  margin-left: 20px;
  p {
    margin-top: 20px;
    max-width: ${({ maxWidth }) => maxWidth || "32ch"};
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
  `}

  ${media.small`
    width:100%;
    margin:0px;
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
  .MuiContainer-root {
    margin-top: 300px;
  }
  ${media.mobile`
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
  background: #fff;
  width: 100%;
  padding: 15px 0px;
  border-radius: 3px;
  color: #131313;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.mobile`
    margin-top: 0px;
    padding:20px;
    box-shadow: none;
    text-align:left;
    justify-content:left;
    
    h1{
      font-size:1.1rem;
      }
  `}

  ${media.small`
    margin-top: 0px;
    padding:15px;
    box-shadow: none;
    text-align:left;
    justify-content:left;
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
      flex:0 0 50%;
    }
  `}
`;
