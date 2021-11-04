import React from "react";
import styled from "styled-components";
import media from "../utility/Media";
import { Btn, CounterTimerBox, WaitList } from "../pages/home/Home.styled";
import { H1, P } from "./Typography";

export const Timer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
  }
  span {
    font-size: 14px;
    color: #fbf6b4;
  }
  ${media.mobile`
    h1{
      font-size:26px !important;
    }
    span {
      font-size: 12px;
    }
  `}
`;

export const CounterContainer = styled.div`
  width: 45%;
  display: flex;
  margin: 20px auto;
  color: #fbf6b4;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#06041e"};
  height: auto;
  padding: 0px 30px 30px 30px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
      margin-top: 15px;
    }
  }

  ${media.mobile`
    width:110%;
    height:auto;
    margin-left:-15px;
    padding-bottom:20px;
    background:#06041E;

    button{
      font-weight:600;
      font-size:16px;
      
    }
  `}

  ${media.small`
    button{
      font-size:14px;
    }
  `}
`;

const CountDownTimer = ({ bg, className }) => {
  return (
    <>
      <CounterContainer bg={bg} className={className}>
        <div>
          <P>Pre-Sale ICO starts in</P>
          <CounterTimerBox>
            <Timer>
              <H1>46</H1>
              <span>Days</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>12</H1>
              <span>Hours</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>05</H1>
              <span>Min</span>
            </Timer>
            <span>:</span>
            <Timer>
              <H1>56</H1>
              <span>Sec</span>
            </Timer>
          </CounterTimerBox>
          <WaitList>
            <Btn bg="#fbf6b4">Whitepaper</Btn>
            <Btn bg="#fbf6b4">Join the waitlist</Btn>
          </WaitList>
        </div>
      </CounterContainer>
    </>
  );
};

export default CountDownTimer;
