import { Container } from "@material-ui/core";
import React from "react";
import arrow_right from "../../assets/images/arrow_right.svg";
import arrow_left from "../../assets/images/arrow_left.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  SmartChainContainer,
  StyledSmartChain,
  SmartChainDiv,
  SmartChainListContainer,
  SmartChainListItemRight,
  SmartChainListItemLeft,
  MoveUp,
} from "./SmartChain.styled";
import { Button } from "../Button";
import { H1, P } from "../Typography";

const SmartChain = () => {
  return (
    <StyledSmartChain>
      <Container>
        <SmartChainContainer>
          <SmartChainDiv>
            <SmartChainListContainer className="ml-0">
              <SmartChainListItemLeft>
                <H1 size="40px">VEFI Smart Chain</H1>
                <P>
                  VEFI Smart Chain is a new generation High performance
                  Blockchain based on a unique consensus algorithm (V-DPoS) with
                  the unique ability of processing over{" "}
                  <strong>1 million</strong>
                  <strong>Transaction per second</strong> with almost zero
                  transaction fees at a near instant processing time.
                </P>
                <div>
                  <Button text="show more" icon={<AiOutlineArrowDown />} />
                </div>
              </SmartChainListItemLeft>
            </SmartChainListContainer>
            <MoveUp>
              <SmartChainListContainer>
                <SmartChainListItemLeft>
                  <P>
                    VEFI Smart chain is a Climate Neutral Blockain whereby
                    making VEFI the latest infrastructure for innovation and
                    development. VEFI Smart Chain i EVM-compatible which
                    supports DApps built on Ethereum. This promotes faster
                    transaction.
                  </P>
                </SmartChainListItemLeft>
              </SmartChainListContainer>
            </MoveUp>
            <SmartChainListContainer className="mobile">
              <SmartChainListItemLeft>
                <H1 color="#0062AF" size="30px">
                  Interoperability:
                </H1>
                <P>
                  VEFI Smart Chain enables multi-chain Interoperability, which
                  makes it easier to scale DApps.
                </P>
                <div>
                  <Button text="show more" icon={<AiOutlineArrowDown />} />
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
