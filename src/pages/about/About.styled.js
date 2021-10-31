import styled from "styled-components";
import { SectionBannerWithBg, SectionTypographyContainer } from "../../components/Section";
import media from "../../utility/Media";

export const SectionAboutHeadingContainer = styled(SectionBannerWithBg)`
  height: 100%;
  display: flex;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
`;
export const AboutContainer = styled.div`
  ${media.mobile`
    height: calc(100vh - 100px);
  `}
  ${media.small`
    height: calc(100vh - 10px);
  `}
`;
export const SectionAboutTypographyContainer = styled(SectionTypographyContainer)`
  width: 800px;
  padding: 20px 0px;

  ${media.mobile`
    width:100%;
    padding:20px 30px;
    white-space:pre-line;

    h2{
      font-size:48px;
      line-height:1.2em;
      font-weight:600;
      white-space:pre-line;
    }
  `}

  ${media.small`
    width:100%;
    padding:20px 10px;
    white-space:pre-line;

    h2{
      font-size:50px;
      line-height:1.2em;
      font-weight:600;
      white-space:pre-line;
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
      font-size:40px;
      margin-bottom:20px;
    }
    p{
      margin-top:10px;
    }
  `}
`;
