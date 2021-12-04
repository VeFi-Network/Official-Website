import React from 'react';
import {
  Icon,
  SocialIcon,
  SocialIconContainer,
  TopLine,
} from '../../styles/contactus/Contactus.styled';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import { Column, Row } from '../../styles/section/Tokenomics.styled';
import { Button, Container, SectionWrapper } from '../../utility/GlobalStyle';

const Contact = (props) => {
  return (
    <>
      <SectionWrapper bg="#000" id={props.id}>
        <Container>
          <Row>
            <Column flex="1">
              <TopLine>
                <Heading fontColor="#ccc">{props.title}</Heading>
              </TopLine>
              <Heading size="sm" fontColor="var(--bg-green)">
                {props.heading}
              </Heading>
              <Subheading fontColor="#ccc">{props.subheading}</Subheading>
              <Button border bgColor="var(--bg-blue)" fontColor="#fff">
                Send An Email To Vefi Network
              </Button>
            </Column>
            <Column flex="1">
              <SocialIconContainer>
                {props.socialMedia.map((link, i) => (
                  <SocialIcon href={link.url} target="_blank" key={i}>
                    <Icon src={link.img} alt={link.title} />
                  </SocialIcon>
                ))}
              </SocialIconContainer>
            </Column>
          </Row>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Contact;
