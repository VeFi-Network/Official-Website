import styled from "styled-components";
import media from "../../utility/Media";
export const StyledFeatures = styled.div`
  margin-top: 40px;
  display: flex;

  h1 {
    font-size: 50px;

    > span {
      font-size: 45px;
    }
  }

  ${media.mobile`
    width:100%;
    display:flex;
    flex-direction:column;

    h1{
      margin-left:3px;
    }
  `};
`;

export const Box = styled.div`
  margin: 30px 10px;

  width: ${({ width }) => width || "100%"};

  > p {
    font-size: 24px;
    line-height: 1.3em;
    font-weight: 400;
  }

  ${media.mobile`
    width:100%;
    white-space:wrap;
    >p{
      font-size:20px;
      text-align:left;
      font-weight:500;
      line-height:1.5em;
    }
  `};
`;

export const StyledFeature = styled.div`
  button {
    margin: 5px 10px;
    background: #fafafa;
    color: #333;
    text-transform: inherit;

    &:hover {
      background: #fafafa;
    }
  }

  ${media.mobile`
    margin:0px;
    margin-bottom:10px;
  `}
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
