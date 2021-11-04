import { Container } from "@material-ui/core";
import React from "react";
import { Banner, StyledFaq, WrapperDiv } from "./Faq.styled";
import Question from "./Question";
import SEO from "../../seo";

const Faq = () => {
  return (
    <StyledFaq>
      <SEO title="FAQ" />
      <Container maxWidth="md">
        <Banner>
          <h1>Millions of customers rely on our Blockchain Ecosystem</h1>
        </Banner>
        <WrapperDiv>
          <h2>Frequently Asked Questions</h2>
          <Question
            label="What is VEFi?"
            text="VEFI is a New Generational High performance Blockchain based on a unique consensus algorithm. It is Africa’s biggest exchange, wallet and smart contract protocol.  In theory, VEFI can process over 1 million transactions per second, is highly secured and scalable."
          />
          <Question
            label="What problems does VEFI solve?"
            text="There are five main problems that VEFI solves:
            I.	Slow transaction processing speed
            II.	Low transaction processing volume
            III.	High transaction costs 
            IV.	Insecurity, poor blockchain infrastructure and architecture
            V.	Minimizing the consumption of energy and equipment to protect the environment and climate.
            "
          />
          <Question
            label="What makes VEFI different to be successful?"
            text="VEFI has three areas that makes it unique and different from other blockchain platforms:
            I.	 High transaction proficiency: Using a unique consensus algorithm (V-DPoS), VEFI can process over 1 million  transactions per second with almost zero transaction fees, at a near-instant processing time. 
            II.	 Green Solution: VEFI is a climate-neutral blockchain platform making it the latest infrastructure for innovation and development.
            III.	 Strong community: VEFI is currently Africa’s largest Blockchain ecosystem with millions of users across the continent and worldwide. By joining the VEFI community, everyone is opportuned to receive the greatest advantages, that will bring great value to the society.
            "
          />
        </WrapperDiv>
      </Container>
    </StyledFaq>
  );
};

export default Faq;
