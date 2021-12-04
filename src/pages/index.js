import React, { useState } from 'react';
import {
  HeroSection,
  InfoSection,
  Navbar,
  Section,
  Sidebar,
  Token,
  TokenSale,
  Contact,
  Footer,
  Roadmap,
  FAQ,
  TokenSalesInfo,
  Team,
} from '../components';
import {
  AboutUs,
  VefiFeatures,
  Tokenomics,
  Tokensale,
  Contactus,
  FooterData,
  Homedata,
  TeamMembers,
  FrequentlyAskedQuestions,
  TokenInfo,
} from '../utility/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...Homedata} />
      <InfoSection {...AboutUs} />
      <Section {...VefiFeatures} />
      <Token {...Tokenomics} />
      <TokenSale {...Tokensale} />
      <TokenSalesInfo {...TokenInfo} />
      <Roadmap />
      <Contact {...Contactus} />
      <Team {...TeamMembers} />
      <FAQ {...FrequentlyAskedQuestions} />
      <Footer {...FooterData} />
    </>
  );
};

export default Home;
