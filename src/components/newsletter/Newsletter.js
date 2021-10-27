import { Container } from "@material-ui/core";
import React from "react";
import image from "../../assets/images/guy_1.png";
import { Button } from "../Button";
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
      <Container>
        <NewsletterContainer>
          <NewsletterDiv>
            <NewsletterGetStarted>
              <H1>Get started - it's free</H1>
              <P className="desktop">
                With our VEFI Blockchain ecosystem, bring your ideas <br />
                to real time in one click to connect to the world. <br />
                this applies to all VEFI products!
              </P>
              <P className="mobile">
                With our VEFI Blockchain ecosystem, bring your ideas <br />
                to real time in one click to connect to the world.
              </P>
            </NewsletterGetStarted>
            <NewsletterFormContainer>
              <NewletterForm>
                <Input type="text" placeholder="example@email.com" />
                <Button text="Submit" bg="#1673B9" />
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
