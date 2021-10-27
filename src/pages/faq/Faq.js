import { Container } from "@material-ui/core";
import React from "react";
import { Banner, StyledFaq, WrapperDiv } from "./Faq.styled";
import Question from "./Question";

const Faq = () => {
  return (
    <StyledFaq>
      <Container maxWidth="md">
        <Banner>
          <h1>Millions of customers rely on our Blockchain Ecosystem</h1>
        </Banner>
        <WrapperDiv>
          <h2>Frequently Asked Questions</h2>
          <Question
            label="What is VEF token and what can it be used for?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <Question
            label="What is VEF token and what can it be used for?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <Question
            label="What is VEF token and what can it be used for?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <Question
            label="What is VEF token and what can it be used for?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </WrapperDiv>
      </Container>
    </StyledFaq>
  );
};

export default Faq;
