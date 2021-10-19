import { Button, Container } from "@material-ui/core";
import React from "react";
import image from "../../assets/images/guy_1.png";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import {
  NewletterForm,
  NewsletterContainer,
  NewsletterDiv,
  NewsletterFormContainer,
  NewsletterGetStarted,
  NewsletterImage,
  StyledNewsletter,
} from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <Container maxWidth="md">
        <NewsletterContainer>
          <NewsletterDiv>
            <NewsletterGetStarted>
              <HeadingOne>Get started - it's free</HeadingOne>
              <Paragraph>
                With our VEFI Blockchain ecosystem, bring your ideas
              </Paragraph>
              <Paragraph>
                to real time in one click to connect to the world.
              </Paragraph>
              <Paragraph>this applies to all VEFI products!</Paragraph>
            </NewsletterGetStarted>
            <NewsletterFormContainer>
              <NewletterForm>
                <input type="text" placeholder="example@email.com" />
                <Button varient="contained">Get Started</Button>
              </NewletterForm>
            </NewsletterFormContainer>
          </NewsletterDiv>
          <NewsletterImage>
            <img src={image} alt="" />
          </NewsletterImage>
        </NewsletterContainer>
      </Container>
    </StyledNewsletter>
  );
};

export default Newsletter;
