import React from "react";
import { Section, SectionBannerWithBg, SectionHeadingContainer, SectionImageContainer } from "../../components/Section";
import about_banner from "../../assets/images/about_banner.png";
import {
  AboutContainer,
  SectionAboutContainer,
  SectionAboutHeadingContainer,
  SectionAboutTypographyContainer,
  StyledAbout
} from "./About.styled";
import { H1, H2, P } from "../../components/Typography";
import { Container } from "@material-ui/core";
import AppBar from "../../components/AppBar";
import circle_image from "../../assets/images/target.png";
import check from "../../assets/images/check.svg";
import Card from "../../components/Card";
import User from "../team/User";
import TeamList from "../team/Team";
import { Space } from "../../components/Divider";
import SEO from "../../seo";

const About = () => {
  return (
    <>
      <SEO title="About Us" />
      <AboutContainer>
        <SectionBannerWithBg bg={about_banner} height="350px">
          <SectionAboutHeadingContainer>
            <Container>
              <SectionAboutTypographyContainer>
                <H2 size="50px" FontWeight="400" LineHeight="1em">
                  Changing the future with various crypto products.
                </H2>
              </SectionAboutTypographyContainer>
            </Container>
          </SectionAboutHeadingContainer>
        </SectionBannerWithBg>
        {/*<div className="countdownContainer">
          <CountDownTimer className="BannerSectionCountdown" bg="#1673B9" />
        </div>*/}
      </AboutContainer>
      <SectionHeadingContainer>
        <Container maxWidth="lg">
          <SectionAboutContainer>
            <StyledAbout>
              <div>
                <H1 size="30px">About Us</H1>
              </div>
              <div>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  VEFI-Network is a New Generation High-performance Blockchain based on a unique consensus algorithm.
                  (V-DPoS). We're building the fastest Blockchain platform which can process over 1 million transactions
                  per second, is highly secure and scalable, user friendly for building DApps
                </P>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  At vefi, our inspiration lies in the trust that comes with blockchain technology coupled with
                  supporting financial freedom, and the liberty that cryptocurrency provides.
                </P>
              </div>
            </StyledAbout>
          </SectionAboutContainer>
          <AppBar label="Our Vision and Mission" className="left" />
          <Section>
            <Card
              img={circle_image}
              text="Improving the freedom of money globally through the integration of institutions, people groups and businesses into the Block chain economy"
              height="40px"
              width="40px"
            />
          </Section>
          <Section>
            <Card
              img={circle_image}
              text="Building and deploying innovative, cutting edge and scalable Blockchain solutions"
              height="40px"
              width="40px"
            />
          </Section>
          <AppBar label="Our Solution" className="left" />
          <Section>
            <Card
              img={check}
              text="VEFI is building an ecosystem of value with the key interest in improving lives using blockchain technology."
              height="20px"
              width="20px"
            />
          </Section>
          <Section>
            <Card
              img={check}
              text="The VEFI exchange would empower users with various blockchain tools to quickly and easily navigate all cryptocurrency products and services."
              height="20px"
              width="20px"
            />
          </Section>
          <Section>
            <Card
              img={check}
              text="High-performant blockchain (VSC) which is climate neutral, mitigates transaction cost and saves time."
              height="20px"
              width="20px"
            />
          </Section>
          <AppBar label="Our Team" id="#team" className="left" />
          <Section>
            <SectionImageContainer>
              {TeamList.map((user, i) => (
                <User user={user} key={i} />
              ))}
            </SectionImageContainer>
          </Section>
          <Space />
        </Container>
      </SectionHeadingContainer>
    </>
  );
};

export default About;
