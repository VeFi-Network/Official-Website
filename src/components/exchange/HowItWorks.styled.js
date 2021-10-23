import styled from "styled-components";
import bg from "../../assets/images/steps_bg.png";
import double_coin from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
export const StyledHowItWorks = styled.section`
  width: 100%;
  display: flex;
  background: url(${double_coin}) no-repeat, #fefcea;
  display: flex;
  flex-direction: column;
  background-position: right;
  background-size: contain;
  background-blend-mode: screen;
  color: #fff;
  padding-bottom: 60px;

  ${media.mobile`
    display:flex;
    width:100%;
    background-position:center;
    background-blend-mode: lighten;
  `}
`;

export const HowItWorksContainer = styled.div`
  width: 100%;
  color: #fff;
  height: auto;
  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
  background: url(${bg}) no-repeat;
  background-position: right;
  background-size: contain;

  hr {
    background-color: #fff !important;
  }

  ${media.mobile`
    width:100%;
    display:flex;
    margin:0px;
    background-image:none;
    flex-direction:column;
    height:auto;
    flex-direction:column;
  `}
`;

export const FloatContainerRight = styled.div`
position: absolute,
top: 0,
left: 0,
`;

export const FloatContainerLeft = styled.div`
position: absolute,
top: 0,
right:0 ,
`;

export const Content = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledLayout = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row-reverse;
  div {
    display: flex;
    background: yellow;
    padding-bottom: 20px;
    flex-direction: column;
  }
`;
