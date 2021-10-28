import { Container } from "@material-ui/core";
import React from "react";
import arrow_right from "../../assets/images/arrow_right.svg";
import arrow_left from "../../assets/images/arrow_left.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SmartChainContainer, StyledSmartChain } from "./SmartChain.styled";
import { Button } from "../Button";
import styled from "styled-components";
import media from "../../utility/Media";

const SectionWrapper = styled.div`
  h1 {
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  color: #161525;

  .wrapperTextContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 20px;
    }
    h1 {
      position: relative;
      top: 40px;
      color: #1673b9;
      font-weight: 700;
      font-size: 28px;
    }
    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3em;
    }
    .text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      justify-content: center;
    }
    .first {
      grid-template-columns: 2fr 1fr;
    }
    .text_center {
      grid-template-columns: 1fr 3fr;
      span:nth-child(1) {
        text-align: right;
      }
    }
    .last {
      margin-left: -60px;
    }
    span {
      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        position: relative;
        top: 20px;
      }
    }
  }
  ${media.mobile`
  padding:0px 20px;
  
  h1 {
    font-size: 38px;
    margin-bottom: 40px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }

  .wrapperTextContainer{
    display:flex;
    flex-direction:column;
    margin-bottom:-100px;
   
    
    button{
      padding:10px 35px;
      font-size:20px;
      margin-top:80px;
    }
    .text {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      justify-content: center;
      position:relative;
    
      .imageArrow{
        transform: rotate(100deg);
        padding-top:0px;
        position:relative;
        bottom:0;
        right:-90px;
        margin-top:0px;
      }
    }
    .first {
      grid-template-columns: 1fr;
    }
    .text_center {
      grid-template-columns: 1fr;
      span:nth-child(1) {
        text-align: left;
      }
    }
  }
  .reverse{
    flex-direction:column-reverse;
    margin-bottom:10px;
    h1{
      margin-left:-120px;
    }
    .text_center{
      img{
        position:absolute;
        top:280px;
        right:0;
      }
    }
  }
  .last{
    margin-top:30px;
    > span > p{
      font-size:18px;
      font-weight:400;
      line-height:1.5em;
      margin-left:60px;
    }
  }
`}

  ${media.small`
  padding:0px 20px;
  
  h1 {
    font-size: 34px;
    margin-bottom: 40px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    margin-left:3px;
  }

  .wrapperTextContainer{
    display:flex;
    flex-direction:column;
    margin-bottom:-100px;
   
    
    button{
      padding:10px 35px;
      font-size:20px;
      margin-top:80px;
    }
    .text {
      .imageArrow{
        transform: rotate(75deg);
        padding-top:0px;
        position:relative;
        top:-60px;
        right:-150px;
        margin-top:0px;
      }
    }
    .first {
      grid-template-columns: 1fr;
    }
    .text_center {
      grid-template-columns: 1fr;
      span:nth-child(1) {
        text-align: left;
      }
    }
  }
  .reverse{
    flex-direction:column-reverse;
    margin-bottom:10px;
    h1{
      margin-left:-80px;
    }
    .text_center{
      img{
        position:absolute;
        top:280px;
        right:0;
      }
    }
  }
  .last{
    margin-top:30px;
    > span > p{
      font-size:24px;
      font-weight:400;
      line-height:1.5em;
      margin-left:60px;
    }
  }
`}
`;
const SmartChain = () => {
  return (
    <StyledSmartChain>
      <Container>
        <SmartChainContainer>
          <SectionWrapper>
            <h1>VEFI Smart Chain</h1>
            <div className="wrapperTextContainer">
              <div className="text first">
                <span>
                  <p>
                    VEFI Smart Chain is a new generation High performance Blockchain based on a unique consensus
                    algorithm (V-DPoS) with the unique ability of processing over{" "}
                    <strong>1 million Transaction per second</strong> with almost zero transaction fees at a near
                    instant processing time.
                    <Button text="show more" icon={<AiOutlineArrowDown />} />
                  </p>
                </span>
                <span className="imageArrow">
                  <img src={arrow_right} alt="" />
                </span>
              </div>
            </div>
            <div className="wrapperTextContainer reverse">
              <h1>Interoperability:</h1>
              <div className="text text_center">
                <span>
                  <img src={arrow_left} alt="" />
                </span>
                <span className="divFlot">
                  <p>
                    VEFI Smart chain is a Climate Neutral Blockain whereby making VEFI the latest infrastructure for
                    innovation and development. VEFI Smart Chain is EVM-compatible which supports DApps built on
                    Ethereum. This promotes faster transaction.
                  </p>
                </span>
              </div>
            </div>
            <div className="wrapperTextContainer">
              <div className="text last">
                <span>
                  <p>
                    VEFI Smart Chain enables multi-chain <br />
                    Interoperability, which makes it easier to scale DApps.
                    <Button text="show more" icon={<AiOutlineArrowDown />} />
                  </p>
                </span>
                <span></span>
              </div>
            </div>
          </SectionWrapper>
        </SmartChainContainer>
      </Container>
    </StyledSmartChain>
  );
};

export default SmartChain;
