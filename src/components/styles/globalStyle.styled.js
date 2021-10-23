import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    body{
        background-color:#fff;
        font-family: 'Montserrat', sans-serif;
        color:#131313;
        font-size:20px;
        overflow-x:hidden;
    }
    img{
        max-width:100%;
    }
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    .button{
        background-color:#fefcea !important;
        color:#000 !important;
        font-weight:400 !important;
    }
    
`;

export default GlobalStyles;
