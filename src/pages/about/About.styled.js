import styled from "styled-components";
import { SectionTypographyContainer } from "../../components/Section";
import media from "../../utility/Media";

export const SectionAboutHeadingContainer = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 60px;

  ${media.mobile`
    justify-content: center;
    align-items: center;
    padding-bottom:20px;
  `}
  ${media.small`
    justify-content: center;
    align-items: center;
    padding-bottom:20px;
  `}
`;
export const AboutContainer = styled.div`
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
export const SectionAboutTypographyContainer = styled(SectionTypographyContainer)`
  width: 800px;
  padding: 20px 0px;
  ${media.mobile`
    width:100%;
    h2{
      font-size:40px;
      line-height:1.2em;
      font-weight:600;
      max-width:30ch;
    }
  `}

  ${media.small`
    width:100%;
    white-space:pre-line;

    h2{
      font-size:40px;
      line-height:1.2em;
      font-weight:600;
      max-width:30ch;
    }
  `}
`;

export const SectionAboutContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 150px;

  ${media.mobile`
    flex-direction:column;
    margin-top: 50px;
  `}
  ${media.small`
    flex-direction:column;
    margin-top: 50px;
  `}
`;

export const StyledAbout = styled.div`
  display: flex;
  white-space: pre-line;
  flex: 1;
  flex-direction: column;
  P {
    margin-bottom: 10px;
  }
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  ${media.mobile`
    flex-direction:column;
    width:100%;
    padding:0px 30px;
    margin-bottom:20px;
    text-align:center;
     justify-content:center;
    
    h1{
      font-size:1.5rem;
      margin-bottom:20px;
    }
    p{
      margin-top:10px;
      max-width:35ch;
      font-size:0.7rem;
      color:#333;
      font-weight:400 !important;
    }
  `}
  ${media.small`
    flex-direction:column;
    width:100%;
    padding:0px 30px;
    margin-bottom:20px;
    h1{
      font-size:1.5rem;
      margin-bottom:20px;
      text-align:center;
    }
    p{
      margin-top:10px;
      max-width:34ch;
      font-size:0.7em;
      color:#333;
      font-weight:normal !important;
    }
  `}
`;
