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
  `}
  ${media.small`
    justify-content: center;
    align-items: center;
  `}
`;
export const AboutContainer = styled.div`
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
export const SectionAboutTypographyContainer = styled(SectionTypographyContainer)`
  width: 800px;
  padding: 20px 0px;
  ${media.mobile`
    width:100%;
    white-space:pre-line;

    h2{
      font-size:48px;
      line-height:1.2em;
      font-weight:600;
      white-space:pre-line;
      max-width:12ch;
    }
  `}

  ${media.small`
    width:100%;
    white-space:pre-line;

    h2{
      font-size:50px;
      line-height:1.2em;
      font-weight:600;
      white-space:pre-line;
      max-width:10ch;
    }
  `}
`;

export const SectionAboutContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 100px;

  ${media.mobile`
    flex-direction:column;
  `}
`;

export const StyledAbout = styled.div`
  display: flex;
  white-space: pre-line;
  > div {
    display: flex;
  }

  div:nth-child(2) {
    flex: 1;
    flex-direction: column;
    P {
      margin-bottom: 10px;
    }
  }
  div:nth-child(1) {
    flex: 0.5;
  }
  ${media.mobile`
    flex-direction:column;
    width:100%;
    padding:0px 30px;
    margin-bottom:20px;
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
