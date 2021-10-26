import styled from "styled-components";
import media from "../../utility/Media";

export const StyledFaq = styled.section`
  width: 100%;
  margin-bottom: 100px;
  padding-top: 60px;
`;

export const Banner = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  margin: 30px 0px;

  h1 {
    font-size: 50px;
    font-weight: 400;
  }

  ${media.mobile`
    margin-top:80px;

    h1{
        font-size:30px;
        font-weight:600;
        text-align:left;
    }
  `}
  ${media.small`
  h1{
    font-size:26px;
    font-weight:600;
    text-align:left;
}
  `}
`;

export const WrapperDiv = styled.div`
h2 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .MuiPaper-root {
    border: 1px solid #eee;
    margin:20px 0px;
    p {
      font-size: 20px;
      font-weight: 400;
    }
    .MuiIconButton-label {
      font-size: 20px;
      font-weight: 400;
    }
    .MuiCollapse-entered {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    .MuiAccordionDetails-root {
      p {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
${media.mobile`
    background:#eee;
    padding:20px 20px;
    height:100%;
   h2{
       font-size:20px;
       font-weight:400;
   }
   .MuiPaper-root{
       p{
           font-size:14px;
           font-weight:600;
       }
       .MuiAccordionDetails-root {
        p {
          font-size: 16px;
          line-height:1.5em;
        }
      }
   }
  `}

${media.small`
    h2{
        font-size:18px;
        font-weight:400;
    }
`}
`;
