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
import CountdownTimer from "../../components/CountdownTimer";
import { Container } from "@material-ui/core";
import AppBar from "../../components/AppBar";
import circle_image from "../../assets/images/target.png";
import check from "../../assets/images/check.svg";
import Card from "../../components/Card";
import User from "../team/User";
import TeamList from "../team/Team";
import { Space } from "../../components/Divider";

const About = () => {
  return (
    <>
      <AboutContainer>
        <SectionBannerWithBg bg={about_banner} height="350px">
          <SectionAboutHeadingContainer>
            <Container>
              <SectionAboutTypographyContainer>
                <H2 size="50px" FontWeight="400" LineHeight="1em">
                  Changing the future with various crypto products.
                </H2>
              </SectionAboutTypographyContainer>
              <CountdownTimer />
            </Container>
          </SectionAboutHeadingContainer>
        </SectionBannerWithBg>
      </AboutContainer>
      <SectionHeadingContainer>
        <Container maxWidth="md">
          <SectionAboutContainer>
            <StyledAbout>
              <div>
                <H1 size="30px">About Us</H1>
              </div>
              <div>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  VEFI is a blockchain ecosystem that aims to ship a cryptocurrency exchange where various crypto assets
                  can be accessed.{" "}
                </P>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  The VEFI ecosystem has one goal - create an innovative blockchain universe.{" "}
                </P>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  VEFI is building an efficient and easy way to create financial products and protocols and to exchange
                  value across DeFi, governments and financial institutions.
                </P>
              </div>
            </StyledAbout>
          </SectionAboutContainer>
          <AppBar label="Our Vision and Mission" />
          <Section>
            <Card
              img={circle_image}
              text="Our vision and mission is to globally improve the freedom of money, improve the blockchain technology and as well become a major blockchain institution in the industry."
              height="40px"
              width="40px"
            />
          </Section>
          <AppBar label="Our Solution" />
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
          <AppBar label="Our Team" />
          <Section>
            <SectionImageContainer>
              {TeamList.map((user, i) => (
                <User img={user.image} key={i} />
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
