import styled, { createGlobalStyle } from "styled-components";
import { Row } from "../styles/section/Tokenomics.styled";

const GlobalStyle = createGlobalStyle`
:root{
   --heading-color:#0d172a;
   --bg-blue:#105DCf;
   --border-bg:#9e994d;
   --text-color:#eff5ff;
   --bg-green:#4fd09e;
   --faq-text-color:#727272;
   --subheading-color:#3f3f3f;
   --bg-color:#fafafa;
   --font-bg:4rem;
   --font-md:2.8rem;
   --font-sm:1.8rem;
   --fm-bold:"SF UI Text SemiBold";
   --fm-heading:"Gilroy-Bold ☞";
   --font-inter-semibold:'Inter'
}
* {
margin: 0;
padding: 0;
line-height: 1.1;
box-sizing: border-box;
font-size: 16px;
}
img{
    max-width: 100%;
    -khtml-user-select:none;
    -o-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
    user-select:none;
    outline:none;
    border:none;
}
a{
  text-decoration:none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-family: "Gilroy-Bold ☞";
color: var(--heading-color);
font-size: var(--font-md);
line-height: 1.3;
}
p {
font-family: "SF UI Text regular";
color:var(--subheading-color);
line-height: 1.5;
}
html,body{
  scroll-behavior: smooth;
  font-size: 16px;
  font-family: "SF UI Text semibold","Inter",'Open Sans', sans-serif;
  background:#fff;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: ${props =>
    props.mxWidth === "sm" ? "600px" : props.mxWidth === "md" ? "800px" : props.mxWidth === "lg" ? "1000px" : "100%"};
  max-width: 1200px;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;

  .button {
    &:hover {
      border: none !important;
    }
  }
`;
export const Button = styled.button`
  border-radius: 20px;
  background: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "var(--heading-color)"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "12px 30px")};
  font-size: 0.85rem;
  font-weight: ${({ bold }) => (bold ? "600" : "")};
  outline: none;
  border: ${({ border }) => (border ? "1px solid #000" : "none")};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;

  &:hover {
    background: ${({ hoverBg }) => hoverBg || ""};
    color: ${({ hoverColor }) => hoverColor || ""};
    border: 1px solid var(--bg-blue);
    transition: 0.5s all ease-in-out;
  }
  > .icon {
    padding-right: 5px;
  }
`;

export const SectionWrapper = styled.section`
  padding: 80px 0px;
  width: 100%;
  background: ${({ bg }) => bg || ""};
  .contactusHeading {
    font: normal normal 600 36px/59px Gilroy ☞;
    color: #4fd09e;
    text-transform: capitalize;
  }
  ${Row} {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 0px;
  }
`;
export const ScrollToTopWrapper = styled.div`
  position: fixed;
  display: flex;

  bottom: 20px;
  right: 0;
  align-items: flex-end;
  text-align: right;
  justify-content: right;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 90%;
    text-align: center;
    justify-content: center;
  }
  .arrow {
    color: var(--bg-blue);
    font-size: 3rem;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
      margin-right: 0px;
    }
  }
`;
export default GlobalStyle;
