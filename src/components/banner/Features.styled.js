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
      font-size:40px;
      margin-left:5px;
      > span {
        font-size: 35px;
      }
    }
  `};

  ${media.small`
    width:100%;
    display:flex;
    flex-direction:column;

    h1{
      font-size:40px;
      margin-left:5px;
      > span {
        font-size: 35px;
      }
    }
  `};
`;

export const Box = styled.div`
  margin: 30px 10px;
  width: ${({ width }) => width || "100%"};

  > p {
    font-size: 24px;
    font-weight: 400;
    max-width: 48ch;
  }

  ${media.mobile`
    width:100%;
    white-space:wrap;
    margin-top:10px;
    >p{
      font-size:18px;
      text-align:left;
      font-weight:500;
      line-height:1.5em;
      max-width: 34ch;
    }
  `};

  ${media.small`
    > p{
      font-size:18px;
      max-width: 30ch;
    }
  `}
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

  ${media.small`
    button{
      background:red;
    }
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

  .walletApp {
    width: 450px;
    height: 450px;
    object-fit: contain;
    margin-top: -220px;
  }
  ${media.mobile`
    margin-top: 0px;
    .walletApp{
      display:none;
    }
  `}
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

  ${media.mobile`
    img{
      margin:0px;
      padding-bottom:10px;
    }
  `}
`;
