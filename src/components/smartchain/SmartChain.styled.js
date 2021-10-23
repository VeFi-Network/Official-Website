import styled from "styled-components";
import map from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
export const StyledSmartChain = styled.section`
  width: 100%;
  background: url(${map}) no-repeat, #fefcea;
  display: flex;
  color: #000;
  background-position: right;
  background-size: contain;
  background-blend-mode: screen;

  ${media.mobile`
    width:100%;
    flex:1;
    margin-bottom:400px;

    img{
      display:none;
    }
`}
`;

export const SmartChainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 100px 0px;

  ${media.mobile`
    width:100%;
    flex:1;
    margin:0px;
`}
`;
export const SmartChainDiv = styled.div`
  margin: 0px 20px;
  padding: 20px 20px;

  ${media.mobile`
  flex:1;
  margin:0px;
`}
`;
export const SmartChainListContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  position: relative;

  ${media.mobile`
  width:100%;
  flex-direction:column;
`}
`;
export const SmartChainListItemLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 20px;
  h1 {
    margin-bottom: 20px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3em;
    letter-spacing: 1.3px;
  }
  div {
    margin-top: 20px;
  }
  button {
    text-transform: lowercase !important;
  }

  ${media.mobile`
  width:100%;
  flex:1;

  p{
    font-size:24px;
    line-height:1.5em;
  }
  button{
    font-size:20px;
    font-weight:600;
  }
`}
`;

export const SmartChainListItemRight = styled.div`
  display: flex;
  flex: 0.5;

  img {
    height: 100px !important;
    margin-top: 70px;
    margin-left: -40px;
  }

  div {
    margin-left: 200px;
    position: absolute;
    top: 50px;
    img {
      margin-top: 35px;
    }
  }
`;

export const MoveUp = styled.div`
  margin-top: -50px;
  margin-left: 200px;

  ${media.mobile`
  margin:0px;
`}
`;
