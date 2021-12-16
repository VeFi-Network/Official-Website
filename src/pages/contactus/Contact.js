import React from "react";
import { ContactLink, Icon, SocialIcon, SocialIconContainer, TopLine } from "../../styles/contactus/Contactus.styled";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import { Column, Row } from "../../styles/section/Tokenomics.styled";
import { Container, SectionWrapper } from "../../utility/GlobalStyle";
import { FiArrowRight } from "../../utility";

const Contact = props => {
  return (
    <>
      <SectionWrapper bg="#000" id={props.id}>
        <Container>
          <Row>
            <Column flex="0.6">
              <TopLine>
                <Heading fontColor="#ccc">{props.title}</Heading>
              </TopLine>
              <Heading size="sm" fontColor="var(--bg-green)" className="contactusHeading">
                {props.heading}
              </Heading>
              <Subheading fontColor="#ccc">{props.subheading}</Subheading>
              <ContactLink href={props?.url}>
                {props?.buttonText}
                <FiArrowRight className="icon" />
              </ContactLink>
            </Column>
            <Column flex="0.4">
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
