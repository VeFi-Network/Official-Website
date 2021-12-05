import React from 'react';
import CountDown from '../../components/CountDown';
import {
  HeroSectionContainer,
  SectionRow,
  SectionColumn,
  TextWrapper,
  Heading,
  Subheading,
  Link,
} from '../../styles/section/Section.styled';
import { HeroSectionBg } from '../../utility';
import { Button, Container } from '../../utility/GlobalStyle';

const HeroSection = (props) => {
  return (
    <>
      <HeroSectionContainer bg={HeroSectionBg} id={props.id}>
        <Container>
          <SectionRow>
            <SectionColumn>
              <TextWrapper>
                <Heading size="md" bold maxWidth="30rem">
                  {props.heading}
                </Heading>
                <Subheading mxWidth="50ch" size="md">
                  {props.subheading}
                </Subheading>
                <Link to="/">
                  <Button border>{props.buttonText}</Button>
                </Link>
              </TextWrapper>
            </SectionColumn>
            <SectionColumn>
              <CountDown
                bg="var(--bg-blue)"
                bgColor="#000"
                hoverBg="var(--bg-green)"
              />
            </SectionColumn>
          </SectionRow>
        </Container>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
