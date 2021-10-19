import styled from "styled-components";
import bg from "../../assets/images/bg_dark.svg";
import double_coin from "../../assets/images/double_coin.svg";
import rectangle from "../../assets/images/rectangle.svg";
export const StyledHowItWorks = styled.section`
  width: 100%;
  display: flex;
  background: url(${double_coin}) no-repeat, url(${rectangle});
  display: flex;
  flex-direction: column;
  background-position: right;
  background-size: contain;
  background-blend-mode: darken;
  color: #fff;
  padding-bottom: 60px;
`;

export const HowItWorksContainer = styled.div`
  width: 100%;
  color: #fff;
  height: auto;
  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
  background: url(${bg}) repeat, blue;
  background-position: left;
  background-size: contain;
  background-blend-mode: darken;

  hr {
    background-color: #fff !important;
  }
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
