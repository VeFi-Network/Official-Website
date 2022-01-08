import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, Button, Input } from "../index";
import { arrow_down, bnb, FiX, logout, wallet } from "../../utility";
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

const BuyNow = () => {
  const { showBuyNowModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const [pay, setPay] = useState("");
  const handleCloseModal = () => {
    dispatch(closeConnectWalletModal());
  };
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
                  <span>0XDF..784</span>
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
                    <span>Available: 0.001</span>
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
                      maxLength="10"
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
                    <Image img={bnb} alt="bnb" />
                    <span>VEF</span>
                    <span>(BSC)</span>
                    <Input type="text" name="pay" value="" placeholder="0.00" readOnly autoComplete="off" />
                  </InputForm>
                </FormWrapper>
                <ModalButtonWrapper>
                  <Button
                    label="Buy VEFI Token"
                    bgColor="var(--bg-green)"
                    style={{ border: "1px solid var(--bg-green)" }}
                    hoverColor="#fff"
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
