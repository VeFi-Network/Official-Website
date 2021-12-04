import React from 'react';
import {
  Heading,
  SectionContainer,
  SectionHeading,
  SectionWrapper,
  SectionImg,
  SectionItem,
  Subheading,
  SectionImgContainer,
} from '../../styles/section/Section.styled';
import { Container } from '../../utility/GlobalStyle';

const Section = (props) => {
  return (
    <>
      <SectionContainer>
        <Container>
          <SectionHeading mxWidth="51rem">
            <Heading size="sm" bold>
              {props.title}
            </Heading>
            <Subheading className="subheading">{props.subtitle}</Subheading>
          </SectionHeading>
          <SectionWrapper>
            {props.features.map((feature, i) => (
              <SectionItem key={i}>
                <SectionImgContainer>
                  <SectionImg src={feature.img} />
                </SectionImgContainer>
                <Heading className="heading" bold>
                  {feature.title}
                </Heading>
                <Subheading className="subheading">
                  {feature.description}
                </Subheading>
              </SectionItem>
            ))}
          </SectionWrapper>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Section;
