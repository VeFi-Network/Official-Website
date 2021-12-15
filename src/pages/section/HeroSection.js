import React from 'react';
import CountDown from '../../components/CountDown';
import Image from '../../components/Image';
import {
  HeroSectionContainer,
  SectionRow,
  SectionColumn,
  TextWrapper,
  Heading,
  Subheading,
  Link,
  BrandsWrapper,
  Brand,
} from '../../styles/section/Section.styled';
import { HeroSectionBg } from '../../utility';
import { Button, Container } from '../../utility/GlobalStyle';

const HeroSection = (props) => {
  return (
    <>
      <HeroSectionContainer bg={HeroSectionBg} id={props.id}>
        <Container>
          <SectionRow>
            <SectionColumn flex="0.6">
              <TextWrapper>
                <Heading maxWidth="50ch">{props.heading}</Heading>
                <Subheading mxWidth="50ch" size="md">
                  {props.subheading}
                </Subheading>
                <Link to="/">
                  <Button border hoverBg="var(--bg-blue)" hoverColor="#fff">
                    {props.buttonText}
                  </Button>
                </Link>
              </TextWrapper>
            </SectionColumn>
            <SectionColumn flex="0.4">
              <CountDown
                bg="var(--bg-blue)"
                bgColor="#000"
                hoverBg="var(--bg-green)"
              />
            </SectionColumn>
            <BrandsWrapper>
              {props.brands.map(({ name, image }, i) => (
                <Brand key={i}>
                  <Image img={image} alt={name} />
                </Brand>
              ))}
            </BrandsWrapper>
          </SectionRow>
        </Container>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
