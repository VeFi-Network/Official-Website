import styled, { createGlobalStyle } from 'styled-components';
import { Row } from '../styles/section/Tokenomics.styled';

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
   --fm-bold:"SF UI Text regular";
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
font-family: "SF UI Text SemiBold";
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
    font-family: "SF UI Text Regular",'Montserrat','Open Sans', sans-serif;
    background:#fff;
}
@font-face {
  font-family: 'SFUI'; /* Define the custom font name */
  src:  url('/fonts/SFUIText-Regular') format('woff2'),
        url('/fonts/SFUIText-Regular') format('woff'); /* Define where the font can be downloaded */
  font-display: fallback; /* Define how the browser behaves during download */
}
`;

export const Container = styled.div`
  z-index: 1;
  width: ${(props) =>
    props.mxWidth === 'sm'
      ? '600px'
      : props.mxWidth === 'md'
      ? '800px'
      : props.mxWidth === 'lg'
      ? '1000px'
      : '100%'};
  max-width: 1200px;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
`;
export const Button = styled.button`
  border-radius: 20px;
  background: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ fontColor }) => fontColor || 'var(--heading-color)'};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '12px 30px')};
  font-size: 0.85rem;
  font-weight: ${({ bold }) => (bold ? '600' : '')};
  outline: none;
  border: ${({ border }) => (border ? '1px solid #000' : 'none')};
  cursor: pointer;
  align-items: center;

  justify-content: center;
  transition: 0.5s all ease-in-out;

  &:hover {
    opacity: 0.5;
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
  background: ${({ bg }) => bg || ''};

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
export default GlobalStyle;
