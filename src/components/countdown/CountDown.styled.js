import styled from "styled-components";
import double_coin from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
export const StyledCountDown = styled.section`
  width: 100%;
  background: url(${double_coin}) no-repeat, #fefcea;
  display: flex;
  color: #000;
  background-position: left;
  background-size: contain;
  background-blend-mode: screen;

  ${media.mobile`

  background-position: center;
  background-size: cover;
  background-blend-mode: lighten;
  `}
`;

export const CountDownCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0px;
  flex-direction: column;
  text-align: center;

  ${media.mobile`
  margin: 30px 0px;

  h3 {
    font-size: 26px;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3em;
  }
  `}
`;
export const CounterTimerBox = styled.div`
  width: 100%;
  color: #fff;
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;
`;

export const WaitList = styled.div`
  ${media.mobile`
  display: flex;
  justify-content: space-around;
  width: 100%;
  `}
`;

export const Btn = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  margin-left: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  ${media.mobile`
  margin-left: 0px;
  `}
  ${media.small`
    margin-left: 0px;
  `}
`;
