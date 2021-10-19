import styled from "styled-components";
import rectangle from "../../assets/images/rectangle.svg";
import map from "../../assets/images/double_coin.svg";
export const StyledSmartChain = styled.section`
  width: 100%;
  display: flex;
  background: url(${rectangle});
  display: flex;

  background-position: right;
  background-size: contain;
  background-blend-mode: ligten;
`;

export const SmartChainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 100px 0px;
`;
export const SmartChainDiv = styled.div`
  margin: 0px 20px;
  padding: 20px 20px;
`;
export const SmartChainListContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
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
`;
