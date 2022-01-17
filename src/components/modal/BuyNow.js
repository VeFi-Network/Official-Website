/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, Button, Input } from "../index";
import Swal from "sweetalert2";
import { useWeb3React } from "@web3-react/core";
import { arrow_down, bnb, FiX, logout, wallet, vefi } from "../../utility";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import { Background, ModalWrapper } from "../../utility/GlobalStyle";
import {
  BuyNowModalWrapper,
  FormWrapper,
  HeadingWrapper,
  InputForm,
  InputFormHeader,
  ModalArrowContainer,
  ModalButtonWrapper,
  ModalCloseWrapper,
  ModalContent,
  WalletAddressWrapper
} from "../../styles/modal/BuyNow.styled";
import { closeConnectWalletModal } from "../../redux/toggleSlice";
import { INITIAL_SALE } from "../../assets/contracts/addresses";
import abi from "../../assets/contracts/InitialSaleABI.json";

const BuyNow = () => {
  const { showBuyNowModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const injectedWeb3 = useWeb3React();
  const [contract, setContract] = useState(null);
  const [pay, setPay] = useState("");
  const [receive, setReceive] = useState("");
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [rate, setRate] = useState(0);

  const handleCloseModal = () => {
    dispatch(closeConnectWalletModal());
  };

  const initiateBuy = async () => {
    try {
      if (!injectedWeb3.active) {
        throw new Error("Connect wallet first");
      } else {
        const _sent = await contract.methods.buyAndVest().send({
          from: injectedWeb3.account ? injectedWeb3.account : "",
          value: injectedWeb3.library.utils.toWei(parseFloat(pay || "0").toString()),
          gas: injectedWeb3.library.utils.toWei("0.00003", "gwei")
        });
        Swal.fire({
          title: "Transaction Successful",
          html: `Transaction executed. <a href="https://bscscan.com/tx/${_sent.transactionHash}">View on explorer</a>`,
          icon: "success",
          confirmButtonText: "OK"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  useEffect(async () => {
    setBalance(injectedWeb3.account ? await injectedWeb3.library.eth.getBalance(injectedWeb3.account) : 0);
    setAccount(
      injectedWeb3.account
        ? injectedWeb3.account.slice(0, 2) + "..." + injectedWeb3.account.slice(37, injectedWeb3.account.length)
        : ""
    );
    setContract(injectedWeb3.account ? new injectedWeb3.library.eth.Contract(abi, INITIAL_SALE) : null);
  }, [injectedWeb3.active]);

  useEffect(async () => {
    setRate(contract ? (await contract.methods.getRate().call()) / 10 ** 18 : 0);
  }, [contract]);

  useEffect(() => {
    const rec = parseFloat(pay.trim().length > 0 ? pay : "0") / rate;
    setReceive(!isNaN(rec) ? rec.toPrecision(3) : "0.00");
  }, [pay]);

  return (
    <>
      {showBuyNowModal && (
        <Background>
          <ModalWrapper mxWidth="md">
            <BuyNowModalWrapper>
              <HeadingWrapper>
                <WalletAddressWrapper>
                  <span>
                    <Image img={wallet} alt="wallet" />
                  </span>
                  <span>{account.trim().length > 0 ? account : "No active account"}</span>
                  <span>
                    <Image img={logout} alt="wallet" />
                  </span>
                </WalletAddressWrapper>
                <ModalCloseWrapper>
                  <FiX className="icon" onClick={handleCloseModal} />
                </ModalCloseWrapper>
              </HeadingWrapper>
              <ModalContent>
                <Heading>Buy VEFI Token</Heading>
                <Subheading>Minimum amount of BNB is 0.001 to participate for the presale</Subheading>
                <FormWrapper>
                  <InputFormHeader>
                    <span>PAY</span>
                    <span>Available: {(balance / 10 ** 18).toPrecision(3)}</span>
                  </InputFormHeader>
                  <InputForm>
                    <Image img={bnb} alt="bnb" />
                    <span>BNB</span>
                    <span>(BSC)</span>
                    <Input
                      type="number"
                      name="pay"
                      value={pay}
                      onChange={e => setPay(e.target.value)}
                      placeholder="0.00"
                      autoComplete="off"
                      max="10"
                    />
                  </InputForm>
                </FormWrapper>
                <ModalArrowContainer>
                  <Image img={arrow_down} alt="arrow_down" />
                </ModalArrowContainer>
                <FormWrapper>
                  <InputFormHeader>
                    <span>GET</span>
                    <span>USD: 0.00</span>
                  </InputFormHeader>
                  <InputForm>
                    <Image img={vefi} alt="vefi" />
                    <span>VEF</span>
                    <span>(BSC)</span>
                    <Input type="text" name="receive" value={receive} placeholder="0.00" readOnly autoComplete="off" />
                  </InputForm>
                </FormWrapper>
                <ModalButtonWrapper>
                  <Button
                    label="Buy VEFI Token"
                    bgColor="var(--bg-green)"
                    style={{ border: "1px solid var(--bg-green)" }}
                    hoverColor="#fff"
                    onClick={initiateBuy}
                  />
                </ModalButtonWrapper>
              </ModalContent>
            </BuyNowModalWrapper>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default BuyNow;
