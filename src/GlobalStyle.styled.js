import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
:root{
    --bg-dark:#1673B9;
    --txt-base:14px;
    --def-color:#1d1e2c;
    --text-gray:#ccc;
    --text-white:whitesmoke;
}
html, body {
    margin: 0;
    font-size: var(--txt-base);
    font-family: 'Montserrat', sans-serif;
    font-weight: medium;
    overflow-x: hidden;
    scroll-behavior: smooth;
    color:var(--def-color);
}
img{
    max-width:100%;
}
.button{
    background-color:#fefcea !important;
    color:#000 !important;
    font-weight:400 !important;
} 

`;

export default GlobalStyles;
