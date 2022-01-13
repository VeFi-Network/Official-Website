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
import { SEED_SALE } from "../assets/contracts/addresses";
import abi from "../assets/contracts/SeedSaleABI.json";

const CountDown = ({ bg, border, bgColor, hoverBg, textBg }) => {
  const injectedWeb3 = useWeb3React();
  const web3 = useWeb3React("networkProvider");
  const dispatch = useDispatch();
  const [contract, setContract] = useState(null);
  const [daysLeft, setDaysLeft] = useState("0");
  const [hoursLeft, setHoursLeft] = useState("0");
  const [minutesLeft, setMinutesLeft] = useState("0");
  const [secondsLeft, setSecondsLeft] = useState("0");
  const [totalTokensBought, setTotalTokensBought] = useState(0);
  const [totalTokensAvailable, setTotalTokensAvailable] = useState(0);

  const loadTime = async () => {
    const remainingDays = await contract.methods.getTimeBeforeStart().call();
    const jsDate = new Date(Date.now() + remainingDays * 1000).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const diff = jsDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const daysAsString = days.toFixed(0);
      const hoursAsString = hours.toFixed(0);
      const minutesAsString = minutes.toFixed(0);
      const secondsAsString = seconds.toFixed(0);
      setDaysLeft(daysAsString);
      setHoursLeft(hoursAsString);
      setMinutesLeft(minutesAsString);
      setSecondsLeft(secondsAsString);

      if (diff < 0) {
        clearInterval(x);
        setDaysLeft("0");
        setHoursLeft("0");
        setMinutesLeft("0");
        setSecondsLeft("0");
      }
    }, 1000);
  };

  const setParams = async () => {
    const tokensBought = await contract.methods.getTokensBought().call();
    const tokensAvailable = await contract.methods.getAvailableTokens().call();
    setTotalTokensBought(tokensBought / 10 ** 18);
    setTotalTokensAvailable(tokensAvailable / 10 ** 18);
  };

  useEffect(async () => {
    if (!web3.active) {
      await web3.activate(networkConnector);
    }
  }, [web3.active]);

  useEffect(() => {
    if (web3.active) {
      setContract(new web3.library.eth.Contract(abi, SEED_SALE));
    }
  }, [web3.active]);

  useEffect(async () => {
    if (!!contract) {
      await loadTime();
      await setParams();
    }
  }, [contract]);

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
              TOTAL VEF BOUGHT: {totalTokensBought.toFixed(0)}/{totalTokensAvailable.toFixed(0)}
            </CountdownHeading>
          </CountdownTextWrapper>
          <CountdownProgressBar>
            <LinearProgress
              variant="determinate"
              value={() => {
                const percentage = (totalTokensBought / totalTokensAvailable) * 100;
                return percentage;
              }}
              className="progress"
            />
          </CountdownProgressBar>
          <CountdownTextWrapper>
            <Heading fontColor="#fff">Seed Sale Begins In</Heading>
          </CountdownTextWrapper>
          <CountdownTimerWrapper>
            <Timer>
              <span>{daysLeft}</span>
              <span>Days</span>
            </Timer>
            :
            <Timer>
              <span>{hoursLeft}</span>
              <span>Hours</span>
            </Timer>
            :
            <Timer>
              <span>{minutesLeft}</span>
              <span>Min</span>
            </Timer>
            :
            <Timer>
              <span>{secondsLeft}</span>
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
              label="Buy Now"
              onClick={injectedWeb3.active ? handleBuyNow : handleConnect}
            />
          </CountdownBtn>
        </CountdownWrapper>
      </CountdownContainer>
    </>
  );
};

export default CountDown;
