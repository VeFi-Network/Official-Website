import styled from "styled-components";
import double_coin from "../../assets/images/double_coin.svg";

export const StyledCountDown = styled.section`
  width: 100%;
  background: url(${double_coin}) no-repeat, #fefcea;
  display: flex;
  color: #000;
  background-position: left;
  background-size: contain;
  background-blend-mode: screen;
`;

export const CountDownCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0px;
  flex-direction: column;
`;

export const HeadingThree = styled.h3`
  font-size: ${({ FontSize }) => FontSize || "30px"};
  font-weight: 600;
  color: ${({ color }) => color || ""};
`;

export const HeadingOne = styled.h1`
  font-size: ${({ FontSize }) => FontSize || "80px"};
  font-weight: 600;
  color: ${({ color }) => color || ""};
`;

export const Paragraph = styled.p`
  font-size: ${({ FontSize }) => FontSize || "24px"};
  font-weight: 500;
  color: ${({ color }) => color || ""};
`;

export const CounterContainer = styled.div`
  width: 50%;
  display: flex;
  color: #fbf6b4;
  justify-content: center;
  background: ${({ bg }) => bg || "black"};
  height: 200px;
  margin-top: 40px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
      margin-top: 15px;
    }
  }
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

export const WaitList = styled.div``;

export const Btn = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  margin-left: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;
