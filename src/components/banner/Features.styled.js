import styled from "styled-components";
import ImageMap from "../../assets/images/double_coin.svg";
export const StyledFeatures = styled.div`
  margin-top: 40px;
  display: flex;

  h1 {
    font-size: 50px;

    > span {
      font-size: 45px;
    }
  }
`;

export const Box = styled.div`
  margin: 30px 10px;
  width: ${({ width }) => width || "100%"};

  > p {
    font-size: 24px;
    line-height: 1.3em;
    font-weight: 400;
  }
`;

export const StyledFeatureRight = styled.div`
  width: 100%;
  background: url(${ImageMap}) no-repeat, red;
  display: flex;
  background-position: left;
  background-size: contain;
  background-blend-mode: screen;
`;
