import styled from "styled-components";
import media from "../utility/Media";
export const Section = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  div {
    display: flex;
  }
`;

export const Display = styled.div`
  flex: ${({ width }) => width || "1"};
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  position: relative;

  p {
    margin-bottom: 10px;
  }
  ${media.mobile`
  
  `}
`;

export const Paper = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  z-index: 100;
  > div {
    button {
      margin: 5px;
      font-size: 16px !important;
      text-transform: capitalize !important;
      padding: 10px;
      width: 180px;
      font-weight: 600;
      background: #fbf6b4 !important;
    }
  }
  ${media.mobile`
  display:flex;
  width:auto;
  white-space:pre-line;
  margin-bottom:5px;

  justfify-content:center;
  > div {
    button {
      font-size: 14px !important;
      text-transform: capitalize !important;
      padding: 10px 0px;
      width: 45%;
      font-weight: 700;
      background:#FBF6B4 !important;
    }
  }
`}

  ${media.small`
    display:flex;
    width:auto;
    white-space:pre-line;
    margin-bottom:5px;
    > div {
      button {
        font-size: 14px !important;
        text-transform: capitalize !important;
        padding: 10px 0px;
        width: 45%;
        font-weight: 700;
        background:#FBF6B4 !important;
      }
    }
  `}
`;
