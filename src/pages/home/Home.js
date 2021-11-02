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
  SectionSmartChainWrapper
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
                  VEFI Smart Chain is a new generation High performance Blockchain based on a unique consensus algorithm
                  (V-DPoS) with the unique ability of processing over <strong>
                    1 million transactions per second
                  </strong>{" "}
                  with almost zero transaction fees at a near instant processing time.
                </P>
                <Button text="show more" bg="#1673b9" icon={<AiOutlineArrowDown />} />
              </div>
              <div className="right"></div>
            </SectionSmartChain>
            <SectionSmartChain>
              <div className="right center"></div>
              <div className="left ">
                <P>
                  VEFI Smart chain is a Climate Neutral Blockchain whereby making VEFI the latest infrasturcture for
                  innovation and development. VEFI Smart Chain is EVM-Compatible which supports DApps built on Etherum.
                  this promotes faster transaction.
                </P>
              </div>
            </SectionSmartChain>
            <SectionSmartChain>
              <div className="left">
                <H2 FontColor="#1673b9" size="24px">
                  Interoperability:
                </H2>
                <P>VEFI Smart Chain enables multi-chain interoperability, which makes it easier to scall DApps</P>
                <Button text="show more" bg="#1673b9" icon={<AiOutlineArrowDown />} />
              </div>
            </SectionSmartChain>
          </SectionSmartChainContainer>
        </Container>
      </SectionSmartChainWrapper>
      <SectionNewsletter>
        <Container maxWidth="md">
          <SectionNewsletterContainer>
            <div className="NewsletterForm">
              <h2>Get started - it's free</h2>
              <p>
                With our VEFI Blockchain ecosystem, bring your ideas to real time in one click to connect with the
                world. this applies to all VEFI products!
              </p>
              <div className="NewsletterInputForm">
                <Input placeholder="example@email.com" />
                <StyledButton bg="#000">Get started</StyledButton>
              </div>
            </div>
            <div className="NewsletterImageContainer">
              <img src={newsletter_img} alt="newletter" />
            </div>
          </SectionNewsletterContainer>
        </Container>
      </SectionNewsletter>
    </>
  );
};

export default HomePage;
