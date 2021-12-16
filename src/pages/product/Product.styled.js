import styled from "styled-components";
import media from "../../utility/Media";

export const SectionHeaderContainer = styled.div`
  ${media.mobile`
    height: auto;
    justify-content: center;
    align-items: center;
    width:100%;
    display:flex;
    padding:20px;
    h2{
        font-size:2.4rem;
        max-width:11ch;
    }
    p{
     font-size:1.1rem;
     max-width:50ch;
     font-weight:normal;
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
