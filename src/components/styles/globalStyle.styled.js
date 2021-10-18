import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color:#fff;
        font-family: 'Montserrat', sans-serif;
        color:#131313;
    }
    img{
        max-width:100%;
    }
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyles;
