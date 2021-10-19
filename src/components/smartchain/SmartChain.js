import { Container } from "@material-ui/core";
import React from "react";
import arrow_right from "../../assets/images/arrow_right.svg";
import arrow_left from "../../assets/images/arrow_left.svg";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import { AiOutlineArrowDown } from "react-icons/ai";
import { StyledButton } from "../header/Register";
import {
  SmartChainContainer,
  StyledSmartChain,
  SmartChainDiv,
  SmartChainListContainer,
  SmartChainListItemRight,
  SmartChainListItemLeft,
  MoveUp,
} from "./SmartChain.styled";

const SmartChain = () => {
  return (
    <StyledSmartChain>
      <Container>
        <SmartChainContainer>
          <SmartChainDiv>
            <SmartChainListContainer>
              <SmartChainListItemLeft>
                <HeadingOne FontSize="40px">VEFI Smart Chain</HeadingOne>
                <Paragraph>
                  VEFI Smart Chain is a new generation High performance
                </Paragraph>
                <Paragraph>
                  Blockchain based on a unique consensus algorithm (V-DPoS)
                </Paragraph>
                <Paragraph>
                  with the unique ability of processing over{" "}
                  <strong>1 million</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Transaction per second</strong> with almost zero
                  transaction fees at a
                </Paragraph>
                <Paragraph>near instant processing time.</Paragraph>
                <div>
                  <StyledButton
                    text="show more"
                    icon={<AiOutlineArrowDown />}
                  />
                </div>
              </SmartChainListItemLeft>
              <SmartChainListItemRight>
                <img src={arrow_right} alt="" />
              </SmartChainListItemRight>
            </SmartChainListContainer>
            <MoveUp>
              <SmartChainListContainer>
                <SmartChainListItemRight>
                  <div>
                    <img src={arrow_left} alt="" />
                  </div>
                </SmartChainListItemRight>
                <SmartChainListItemLeft>
                  <Paragraph>
                    VEFI Smart chain is a Climate Neutral Blockain
                  </Paragraph>
                  <Paragraph>
                    whereby making VEFI the latest infrastructure for
                  </Paragraph>
                  <Paragraph>
                    innovation and development. VEFI Smart Chain is
                  </Paragraph>
                  <Paragraph>
                    EVM-compatible which supports DApps built on
                  </Paragraph>
                  <Paragraph>
                    Ethereum. This promotes faster transaction.
                  </Paragraph>
                </SmartChainListItemLeft>
              </SmartChainListContainer>
            </MoveUp>
            <SmartChainListContainer>
              <SmartChainListItemLeft>
                <HeadingOne color="#0062AF" FontSize="30px">
                  Interoperability:
                </HeadingOne>
                <Paragraph>VEFI Smart Chain enables multi-chain</Paragraph>
                <Paragraph>
                  Interoperability, which makes it easier to scale
                </Paragraph>
                <Paragraph>DApps.</Paragraph>
                <div>
                  <StyledButton
                    text="show more"
                    icon={<AiOutlineArrowDown />}
                  />
                </div>
              </SmartChainListItemLeft>
            </SmartChainListContainer>
          </SmartChainDiv>
        </SmartChainContainer>
      </Container>
    </StyledSmartChain>
  );
};

export default SmartChain;
