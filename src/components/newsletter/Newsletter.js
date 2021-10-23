import { Button, Container } from "@material-ui/core";
import React from "react";
import image from "../../assets/images/guy_1.png";
import Input from "../Input";
import { H1, P } from "../Typography";
import {
  NewletterForm,
  NewsletterContainer,
  NewsletterDiv,
  NewsletterFormContainer,
  NewsletterGetStarted,
  NewsletterImage,
  StyledNewsletter
} from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <Container maxWidth="md">
        <NewsletterContainer>
          <NewsletterDiv>
            <NewsletterGetStarted>
              <H1>Get started - it's free</H1>
              <P>
                With our VEFI Blockchain ecosystem, bring your ideas to real time in one click to connect to the world.
                this applies to all VEFI products!
              </P>
            </NewsletterGetStarted>
            <NewsletterFormContainer>
              <NewletterForm>
                <Input type="text" placeholder="example@email.com" />
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
