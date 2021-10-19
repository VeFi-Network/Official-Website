import styled from "styled-components";
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
  display: flex;
`;

export const FeaturedRightImage = styled.div`
  margin-top: -180px;
  position: absolute;
  top: 0;
`;

export const AppMockUp = styled.div`
  position: relative;
  height: 400px;

  img {
    width: 500px;
    height: 500px;
    object-fit: contain;
    position: relative;
    margin-top: -10px;
    margin-left: 30px;
  }
`;
