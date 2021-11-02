import styled from "styled-components";
import media from "../../utility/Media";

export const SectionHeaderContainer = styled.div`
  ${media.mobile`
    height: 80vh;
    justify-content: center;
    align-items: center;
    width:100%;
    display:flex;
    h2{
        font-size:2.4rem;
    }
    p{
     font-size:1.3rem;
     max-width:20ch;
     font-weight:400;
    }
  `}
  @media only screen and (max-width:375px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      max-width: 20ch;
      font-weight: 400;
    }
  }
`;
