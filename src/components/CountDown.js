/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import {
  CountdownContainer,
  CountdownProgressBar,
  CountdownTextWrapper,
  CountdownTimerWrapper,
  CountdownWrapper,
  Timer,
  CountdownHeading,
  CountdownBtn
} from "../styles/countdown/Countdown.styled";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "./index";
import { Heading } from "../styles/section/Section.styled";
import { openConnectWalletModal, openModal } from "../redux/toggleSlice";
import { networkConnector } from "../web3/connectors";

const CountDown = ({ bg, border, bgColor, hoverBg, textBg }) => {
  const { userConnected } = useSelector(state => state.modal);
  const web3 = useWeb3React("networkProvider");
  const dispatch = useDispatch();

  useEffect(async () => await web3.activate(networkConnector), []);

  const handleBuyNow = () => {
    dispatch(openConnectWalletModal());
  };
  const handleConnect = () => {
    dispatch(openModal());
  };
  return (
    <>
      <CountdownContainer>
        <CountdownWrapper bg={bg} border={border}>
          <CountdownTextWrapper>
            <CountdownHeading uppercase bold textColor={textBg}>
              Join Seed Sale
            </CountdownHeading>
            <CountdownHeading bold sm>
              VEF 3,575,000
            </CountdownHeading>
          </CountdownTextWrapper>
          <CountdownProgressBar>
            <LinearProgress variant="determinate" value={70} className="progress" />
          </CountdownProgressBar>
          <CountdownTextWrapper>
            <Heading fontColor="#fff">Total amount VEF 5,500,000</Heading>
          </CountdownTextWrapper>
          <CountdownTimerWrapper>
            <Timer>
              <span>30</span>
              <span>Days</span>
            </Timer>
            :
            <Timer>
              <span>21</span>
              <span>Hours</span>
            </Timer>
            :
            <Timer>
              <span>19</span>
              <span>Min</span>
            </Timer>
            :
            <Timer>
              <span>56</span>
              <span>Sec</span>
            </Timer>
          </CountdownTimerWrapper>
          <CountdownBtn>
            <Button
              bgColor={bgColor}
              hoverBg={hoverBg}
              fontColor="#fff"
              bold
              border
              label="Buy on Pinkswap"
              onClick={userConnected ? handleBuyNow : handleConnect}
            />
          </CountdownBtn>
        </CountdownWrapper>
      </CountdownContainer>
    </>
  );
};

export default CountDown;
