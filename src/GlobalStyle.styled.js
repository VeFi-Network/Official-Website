import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    overflow-x: hidden;
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
