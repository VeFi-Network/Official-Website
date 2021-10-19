import styled from "styled-components";
import circle from "../../assets/images/circle.svg";
export const Left = styled.div`
  flex: 1;

  > span {
    position: absolute;
    left: 0;
    background: red;
    height: 100px;
    object-fit: cover;
    width: 100px;
    z-index: 1;
  }
`;

export const Right = styled.div`
  flex: 1;
  position: relative;
`;

export const CircleStyled = styled.span`
  background: url(${circle});
  background-size: contain;
  padding: 20px 10px;
  background-position: left;
`;
