import styled from "styled-components";
import rec from "../../assets/images/map.png";

export const StyledExchange = styled.section`
  width: 100%;
  background: url(${rec}) no-repeat, darkblue;
  display: flex;
  background-position: left;
  background-size: contain;
  background-blend-mode: darken;
  color: #fff;
`;

export const ExchangeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 30px 0px;
  padding-bottom: 50px;
  h1 {
    margin-top: 70px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.3em;
    margin-left: 25px;
  }
`;
