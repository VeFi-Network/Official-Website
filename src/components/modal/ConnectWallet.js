import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, Button } from "../index";
import { WalletProvider } from "../../utility/data";
import { FiX } from "../../utility";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import { Background, ModalWrapper } from "../../utility/GlobalStyle";
import {
  ModalCloseBtn,
  ModalContent,
  ModalFooter,
  ModalHeadingContainer,
  WalletInfo
} from "../../styles/modal/ConnectWallet.styled";
import { closeModal } from "../../redux/toggleSlice";

const ConnectWallet = () => {
  const { showConnectModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {showConnectModal && (
        <Background>
          <ModalWrapper mxWidth="sm">
            <ModalHeadingContainer>
              <ModalCloseBtn>
                <FiX className="icon" onClick={handleCloseModal} />
              </ModalCloseBtn>
              <Heading>Connect Wallet</Heading>
            </ModalHeadingContainer>
            <ModalContent>
              {WalletProvider.map((provider, i) => (
                <WalletInfo key={i}>
                  <Image img={provider.logo} alt="" />
                  <Subheading>{provider.name}</Subheading>
                </WalletInfo>
              ))}
            </ModalContent>
            <ModalFooter>
              <Subheading>Dont't have a crypto wallet yet?</Subheading>
              <Button
                bgColor="var(--bg-blue)"
                style={{ border: "1px solid var(--bg-blue)" }}
                label="Learn how to connect"
                hoverColor="var(--heading-color)"
                fontColor="#fff"
              />
            </ModalFooter>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default ConnectWallet;
