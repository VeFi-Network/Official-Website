import styled from "styled-components";
import circle from "../../assets/images/circle.svg";
import media from "../../utility/Media";
export const Left = styled.div`
  flex: ${({ size }) => size || 0.5};

  ${media.mobile`
    width:100%;
`}
`;

export const Right = styled.div`
  flex: ${({ size }) => size || 0.5};
  position: relative;
`;

export const CircleStyled = styled.span`
  background: url(${circle});
  background-size: contain;
  padding: 20px 10px;
  background-position: left;
`;
