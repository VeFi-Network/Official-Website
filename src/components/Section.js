import styled from "styled-components";
import circle_yellow from "../assets/images/circle_yellow.svg";
import steps_bg from "../assets/images/steps_bg.png";
import media from "../utility/Media";
export const SectionWrapper = styled.section`
  padding-top: 60px;
  width: 100%;
`;
export const SectionBanner = styled.div`
  width: 100%;
  background-image: url(${({ bg }) => bg || ""});
`;

export const SectionAppBar = styled.div`
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
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
  flex: 1 1 10em;
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
  height: 250px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  padding-top: 50px;
  color: #fff;

  ${media.mobile`
    height:100%;
    background-position: left;
    padding-bottom:30px;
  `}

  ${media.small`
    height:100%;
    background-position: left;
  `}
`;

export const SectionTypographyContainer = styled.div`
  white-space: pre-line;
  width: 500px;
  margin-left: 20px;
  p {
    margin-top: 10px;
  }
  span {
    color: #fbf6b4;
    background: url(${circle_yellow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 25px 15px;
    margin: 0px -10px;
  }
  ${media.mobile`
    width:100%;
    margin:0px;
    h2{
        font-size:50px;
    }
  `}

  ${media.small`
    width:100%;
    margin:0px;

    h2{
        font-size:44px;
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
  `}

  ${media.small`
    width:110%;
    height:auto;
    bottom:0;
    margin-right:-15px;
    margin-top:30px;
    margin-bottom:30px;
    z-index:10;
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
  position: relative;

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
  margin-top: 150px;
  display: flex;
  background: #fff;
  width: 100%;
  padding: 15px 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  color: #131313;
  justify-content: space-between;
  align-items: center;
  div:nth-child(1),
  div:nth-child(3) {
    flex: 0.6;
  }
  div:nth-child(2) {
    flex: 1;
    text-align: center;
  }

  ${media.mobile`
    margin-top: 0px;
    padding:20px;
    div:nth-child(3) {
        flex: 0.1;
    }
    div:nth-child(1){
        display:none;
    }
    div:nth-child(2) {
        flex: 1;
        text-align:left;
        padding-left:20px;
        h1{
            font-size:24px;
        }
    }
  `}

  ${media.small`
    margin-top: 0px;
    padding:15px;
    div:nth-child(3) {
        flex: 0.1;
    }
    div:nth-child(1){
        display:none;
    }
    div:nth-child(2) {
        flex: 1;
        text-align:left;
        padding-left:20px;

        h1{
            font-size:20px;
        }
    }
  `}
`;
