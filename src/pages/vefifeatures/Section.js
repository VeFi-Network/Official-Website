import React from "react";
import {
  Heading,
  SectionContainer,
  SectionHeading,
  SectionWrapper,
  SectionImg,
  SectionItem,
  Subheading,
  SectionImgContainer
} from "../../styles/section/Section.styled";
import { Container } from "../../utility/GlobalStyle";

const Section = props => {
  return (
    <>
      <SectionContainer>
        <Container>
          <SectionHeading mxWidth="51rem">
            <Heading size="sm" bold className="headingBg">
              {props.title}
            </Heading>
            <Subheading className="subheadingBg">{props.subtitle}</Subheading>
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
                <Subheading className="subheading">{feature.description}</Subheading>
              </SectionItem>
            ))}
          </SectionWrapper>
          <SectionHeading>
            <Heading
              style={{
                font: " normal normal bold 24px/30px Gilroy ☞",
                paddingTop: "30px"
              }}
              className="headingUseCase"
            >
              {props.useCases.heading}
            </Heading>
            <ul className="usecases">
              {props.useCases.useCase.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </SectionHeading>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Section;
