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
                  Changing the world's future to make the world work better for us all.
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
                  VEFI is a blockhain system that operates a cryptocurrency exchange where all crypto services and
                  products are as well accessed on a single platform.{" "}
                </P>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  The VEFI ecosystem Labs and members work towards one goal, which is to bring Blockchain technology
                  closer to everyone with innovations that make impacts.{" "}
                </P>
                <P size="22px" FontWeight="500" LineHeight="1.3em">
                  VEFI is enabling the efficient and easier way to create financial products, protocols and exchange of
                  value across DeFi, governments and financial institutions.
                </P>
              </div>
            </StyledAbout>
          </SectionAboutContainer>
          <AppBar label="Our Vision and Mission" />
          <Section>
            <Card
              img={circle_image}
              text="Our vision and mission is to globally improve the freedom of money, improve the blockchain technology and as well become a major blockchain infrastucture services provider in the ecosystem."
              height="40px"
              width="40px"
            />
          </Section>
          <AppBar label="Our Solution" />
          <Section>
            <Card
              img={check}
              text="VEFI is building the world's valuable blockchain ecosystem with the key interest to improve lives using the blockchain."
              height="20px"
              width="20px"
            />
          </Section>
          <Section>
            <Card
              img={check}
              text="VEFI exchange empowers users with all blockchain tools to quickly and easily navigate all cryptocurrency products and services without toggling between different apps."
              height="20px"
              width="20px"
            />
          </Section>
          <Section>
            <Card
              img={check}
              text="High-performance Blockchain (VSC) which is climate neutral, saves the cost of trnsactions and times wasted on transactions."
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
