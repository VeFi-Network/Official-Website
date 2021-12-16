import styled from "styled-components";
import media from "../../utility/Media";
import banner from "../../assets/images/banner_product.png";

export const StyledPrivayContainer = styled.div`
  height: 250px;
  padding-top: 60px;
  background: url(${banner});
  display: flex;
  flex-direction: column;
  h2 {
    color: #fff;
  }
  ${media.mobile`
    align-items:center;
    justify-content:center;
      h2{
        max-width:20ch;
      }
  `}
`;
