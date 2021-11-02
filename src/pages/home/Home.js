import React from "react";
import Banner from "../../components/banner/Banner";
import Features from "../../components/banner/Features";
import HeroBanner from "../../components/banner/HeroBanner";
import CountDown from "../../components/countdown/CountDown";
import Exchange from "../../components/exchange/Exchange";
import HowItWorks from "../../components/exchange/HowItWorks";
import Subscribe from "../../components/subscribe/Subscribe";
import { Container } from "@material-ui/core";
import {
  SectionNewsletterContainer,
  SectionNewsletter,
  SectionSmartChain,
  SectionSmartChainContainer,
  SectionSmartChainWrapper,
  NewsletterForm,
  NewsletterInputForm,
  NewsletterImageContainer
} from "./Home.styled";
import { Button, StyledButton } from "../../components/Button";
import { H2, P } from "../../components/Typography";
import { AiOutlineArrowDown } from "react-icons/ai";
import Input from "../../components/Input";
import newsletter_img from "../../assets/images/guy_1.png";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Subscribe />
      <CountDown />
      <HeroBanner />
      <Features />
      <Exchange />
      <HowItWorks />
      <SectionSmartChainWrapper>
        <Container maxWidth="md">
          <SectionSmartChainContainer>
            <div className="Heading">
              <h2>VEFI Smart Chain</h2>
            </div>
            <SectionSmartChain>
              <div className="left">
                <P>
                  {" "}
                  VEFI Smart Chain is a new generation high-performant blockchain based on a unique consensus algorithm
                  (V-DPoS) that aims to have the ability to process over
                  <strong>1 million transactions per second</strong> with almost zero transaction fees at a near instant
                  processing time.{" "}
                </P>
                <Button text="Show More" bg="#1673b9" icon={<AiOutlineArrowDown />} />
              </div>
              <div className="right"></div>
            </SectionSmartChain>
            <SectionSmartChain>
              <div className="right center"></div>
              <div className="left ">
                <P>
                  VEFI Smart Chain would be EVM-compatible and would hence be easy for Ethereum developers to transition
                  to.
                </P>
              </div>
            </SectionSmartChain>
            <SectionSmartChain>
              <div className="left">
                <H2 FontColor="#1673b9" size="24px">
                  Interoperability:
                </H2>
                <P>VEFI Smart Chain would be cross-chain and interoperable.</P>
                <Button text="Show More" bg="#1673b9" icon={<AiOutlineArrowDown />} />
              </div>
            </SectionSmartChain>
          </SectionSmartChainContainer>
        </Container>
      </SectionSmartChainWrapper>
      <SectionNewsletter>
        <Container maxWidth="md">
          <SectionNewsletterContainer>
            <NewsletterForm>
              <h2>Get started - it's free</h2>
              <p>
                With our VEFI Blockchain ecosystem, bring your ideas to real time in one click to connect with the
                world. this applies to all VEFI products!
              </p>
              <NewsletterInputForm>
                <Input placeholder="example@email.com" />
                <StyledButton bg="#000">Get started</StyledButton>
              </NewsletterInputForm>
            </NewsletterForm>
            <NewsletterImageContainer>
              <img src={newsletter_img} alt="newletter" />
            </NewsletterImageContainer>
          </SectionNewsletterContainer>
        </Container>
      </SectionNewsletter>
    </>
  );
};

export default HomePage;
