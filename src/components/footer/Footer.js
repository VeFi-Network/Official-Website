import React from 'react';
import { Flag, Image, ScrollToTop } from '../index';
import { FiDownload } from 'react-icons/fi';
import {
  FooterLink,
  FooterLogo,
  FooterWrapper,
} from '../../styles/footer/Footer.styled';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import { Box, Column, Row } from '../../styles/section/Tokenomics.styled';
import { Logo } from '../../utility';
import { Button, Container, SectionWrapper } from '../../utility/GlobalStyle';

const Footer = ({ heading, subheading, document, id }) => {
  return (
    <>
      <FooterWrapper bg="#000" id={id}>
        <Container>
          <Row>
            <Column flex="1">
              <FooterLogo to="/">
                <Image img={Logo} alt="footer logo" />
              </FooterLogo>
              <Heading size="md" fontColor="#fff">
                {heading}
              </Heading>
              <Subheading fontColor="var(--bg-color)">{subheading}</Subheading>
              <Flag />
            </Column>
            <Column flex="0.2">
              <Box>
                <FooterLink href={document}>
                  <Button bgColor="var(--bg-blue)" fontColor="#fff" border>
                    Whitepaper &nbsp; <FiDownload />
                  </Button>
                </FooterLink>
              </Box>
            </Column>
          </Row>
        </Container>
      </FooterWrapper>
      <SectionWrapper bg="#fff" style={{ textAlign: 'center' }}>
        <Container>
          <Row>
            <Column flex="1">
              <Subheading fontColor="var(--subheading-color)">
                Copyright &copy; 2021 Vefi Network. All Rights Reserved.
              </Subheading>
            </Column>
          </Row>
        </Container>
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default Footer;
