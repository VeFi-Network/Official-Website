import React from "react";
import { Container, Divider } from "@material-ui/core";
import { FaTelegramPlane } from "react-icons/fa";
import { BiCheckCircle, BiRefresh } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  SectionNewsletterContainer,
  SectionNewsletter,
  SectionSmartChain,
  SectionSmartChainContainer,
  SectionSmartChainWrapper,
  NewsletterForm,
  NewsletterInputForm,
  NewsletterImageContainer,
  StyledCountDown,
  CountDownCenterContainer
} from "./Home.styled";
import { Button, StyledButton } from "../../components/Button";
import { H1, H2, H3, P } from "../../components/Typography";
import Input from "../../components/Input";
import newsletter_img from "../../assets/images/guy_1.png";
import coin_image from "../../assets/images/double_coin.svg";
import arrow_right from "../../assets/images/arrow.svg";
import asset1 from "../../assets/images/asset1.svg";
import Image from "../../assets/images/guy_2.png";
import map from "../../assets/images/map.png";
import app_2 from "../../assets/images/app_1.svg";
import app_1 from "../../assets/images/app_2.svg";
import phone_app_1 from "../../assets/images/phone__app_1.png";
import phone_app_2 from "../../assets/images/phone__app_2.png";
import arrow from "../../assets/images/arrow.svg";

import {
  Box,
  CircleStyled,
  ExchangeContainer,
  FeaturedRightImage,
  HeroBannerCircleStyled,
  HeroBannerContainer,
  HeroBannerJoinCommunity,
  HowItWorksContainer,
  Left,
  QuoteLeft,
  QuoteRight,
  Right,
  StyledBanner,
  StyledBannerContainer,
  StyledExchange,
  StyledFeatureRight,
  StyledFeatures,
  StyledHeroBanner,
  StyledHowItWorks,
  StyledSectionContainer,
  StyledSubscribe,
  SubscribeContainer,
  SubscribeFormContainer,
  SubscribeFormText
} from "../../components/Section";
import { Paper } from "../../components/Grid";
import Steps from "../../components/Steps";
import CountDownTimer from "../../components/CountDown";
const HomePage = () => {
  return (
    <>
      {/* BANNER */}
      <StyledBanner>
        <Container>
          <StyledBannerContainer>
            <H1>
              Revolutionary innovation in blockchain technology from<CircleStyled>Africa</CircleStyled> to the world.
            </H1>
            <div className="HeaderBannerButtonContainer">
              <StyledButton bg="#fbf6b4">Buy VEF Token</StyledButton>
              <a href="/">
                <StyledButton>Whitepaper</StyledButton>
              </a>
            </div>
            <div className="imageBox">
              <img src={arrow_right} alt="" />
            </div>
          </StyledBannerContainer>
        </Container>
      </StyledBanner>
      {/* SUBSCRIBE FORM STARTS */}
      <StyledSubscribe>
        <Container>
          <SubscribeFormText>
            <SubscribeContainer>
              <div className="mobile">
                <img src={coin_image} alt="" />
              </div>
              <div>
                <SubscribeFormContainer>
                  <H1>
                    VeFi is an emerging blockchain ecosystem with the primal aim to build the next big thing in the
                    blockchain ecosphere.
                  </H1>
                  <H3>Stay Updated!</H3>
                  <div className="subscribeFOrm">
                    <input type="text" placeholder="example@email.com" />
                    <StyledButton bg="#000">Submit</StyledButton>
                  </div>
                </SubscribeFormContainer>
              </div>
            </SubscribeContainer>
          </SubscribeFormText>
        </Container>
      </StyledSubscribe>
      {/* COUNTDOWN */}
      <StyledCountDown>
        <Container>
          <CountDownCenterContainer>
            <H3 size="1.2rem">The next big thing in</H3>
            <H1 size="3.0rem">the blockchain ecosphere</H1>
            <P size="1rem" className="mobile">
              We believe in building products which are fast and scalable, leveraging crypto has never been this
              convenient.
            </P>
            <CountDownTimer />
          </CountDownCenterContainer>
        </Container>
      </StyledCountDown>

      {/* <=== HERO BANNER  ===> */}
      <StyledHeroBanner>
        <QuoteLeft className="hideOnMobile">
          <img src={asset1} alt="" />
        </QuoteLeft>
        <HeroBannerContainer className="phone">
          <Left className="imageMobile">
            <img src={Image} alt="" />
          </Left>
          <QuoteRight className="hideOnMobile">
            <img src={asset1} alt="" />
          </QuoteRight>
          <Right>
            <HeroBannerJoinCommunity>
              <H1>
                From
                <HeroBannerCircleStyled>Africa</HeroBannerCircleStyled>to the world
              </H1>
              <P>
                We are passionate about letting the world understand that Africa has a lot to offer in the crypto space.
              </P>
              <a href="https://t.me/vefi_official" target="_blank" rel="noreferrer">
                <Button icon={<FaTelegramPlane />} text="Join our community" />
              </a>
            </HeroBannerJoinCommunity>
          </Right>
        </HeroBannerContainer>
      </StyledHeroBanner>
      {/* <=== FEATURES ===> */}
      <StyledHeroBanner>
        <Container>
          <StyledFeatures>
            <Left size="1">
              <H1 size="2.3rem">
                VEFI <span>Wallet</span>
              </H1>
              <Box>
                <P className="desktop">
                  The VEFI wallet aims to be flexible, secure and easy to use enabling users to store, spend, receive,
                  swap and exchange their crypto assets with convenience.
                </P>
              </Box>
              <Paper>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> Store Crypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Send Cypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Spend Cypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Swap Cypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Receive Cypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Exchange Cypto
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" />
                    Stake assets
                  </StyledButton>
                </div>
              </Paper>
            </Left>
            <Right size="0.4">
              <StyledFeatureRight>
                <FeaturedRightImage>
                  <img src={map} alt="app" />
                  <img src={app_2} alt="app" className="walletApp" />
                </FeaturedRightImage>
              </StyledFeatureRight>
            </Right>
          </StyledFeatures>
        </Container>
      </StyledHeroBanner>
      {/* <=== EXCHANGE ===> */}
      <StyledExchange>
        <Container>
          <ExchangeContainer>
            <Left size="0.4">
              <img src={app_1} alt="app" className="deskToptext" />
              <div className="arrow">
                {" "}
                <img src={arrow} alt="app" />
              </div>
              <div className="desktop">
                <img src={phone_app_1} alt="app" />
                <img src={phone_app_2} alt="app" />
              </div>
            </Left>
            <StyledSectionContainer size="0.6">
              <H1>
                VEFI <span>exchange</span>
              </H1>
              <P className="deskToptext">
                VEFI exchange aims to be a unified cryptocurrency built to enable users navigate and and control all
                crypto related products and services with the convenience of a single platform.
              </P>
              <P className="mobileText">
                VEFI exchange aims to be a unified cryptocurrency exchange platform built to enable users navigate and
                control all crypto related products and services with the convenience of a single platform.
              </P>
              <Paper>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> Margin trading
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> P2P trading
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> Features trading
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> Spot trading
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> NFT
                  </StyledButton>
                  <StyledButton className="button">
                    <BiCheckCircle className="icon" /> DEX
                  </StyledButton>
                </div>
              </Paper>
            </StyledSectionContainer>
          </ExchangeContainer>
        </Container>
      </StyledExchange>
      {/* HOW IT WORKS */}
      <StyledHowItWorks>
        <Container maxWidth="md">
          <HowItWorksContainer>
            <Steps
              icon={<BiRefresh />}
              title="Unlimited Transaction"
              desc="VEFI ensures high speed and low transaction fees for large volumes of transaction."
            />
            <Divider orientation="vertical" flexItem />
            <Steps
              icon={<MdLockOutline />}
              title="Maximum security"
              desc="Trusted by tons of users for its absolute security."
            />
            <Divider orientation="vertical" flexItem />
            <Steps
              icon={<AiOutlineUsergroupAdd />}
              title="Easy to use"
              desc="Every one enjoys an easy-to-use platform which is what VEFI offers."
            />
          </HowItWorksContainer>
        </Container>
      </StyledHowItWorks>
      {/* <=== SMART CHAIN SECTION ===> */}
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
                  VEFI Smartchain is a new generation high-performant blockchain based on a unique consensus algorithm
                  (V-DPoS). As is the goal of every blockchain project, it would facilitate a credible transaction
                  without the involvement of a middleman. Our smart chain is aimed at providing fast, smart and secure
                  transactions, reducing surplus transaction costs, with little operational conflicts.
                </P>
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
              </div>
            </SectionSmartChain>
          </SectionSmartChainContainer>
        </Container>
      </SectionSmartChainWrapper>
      {/* <=== SMART CHAIN SECTION ENDS ===> */}
      {/* <=== NEWSLETTER SECTION ===> */}
      <SectionNewsletter>
        <Container maxWidth="md">
          <SectionNewsletterContainer>
            <NewsletterForm>
              <h2>Get started - it's free</h2>
              <p>
                With the VEFI blockchain ecosystem, ideas transition to reality and solace would be taken in crypto.
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
      {/* <=== NEWSLETTER SECTION ENDS ===> */}
    </>
  );
};

export default HomePage;
