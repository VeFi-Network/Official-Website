import React, { useState } from 'react';
import {
  FaqContainer,
  FaqTextWrapper,
  Faquestion,
  FaquestionContainer,
} from '../../styles/faq/Faq.styled';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import { Container, SectionWrapper } from '../../utility/GlobalStyle';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';

const FAQ = (props) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <SectionWrapper bg="#fff" id={props.id}>
        <Container>
          <FaqContainer>
            <FaqTextWrapper>
              <Heading size="sm" bold className="faqheading">
                {props.heading}
              </Heading>
              <Subheading className="faqsubheading">
                {props.subheading}
              </Subheading>
            </FaqTextWrapper>
            <TabContext value={value}>
              <Box className="faqBox">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="faq"
                >
                  {props.tab.map(({ label, id }) => (
                    <Tab label={label} value={id} key={id} className="tab" />
                  ))}
                </Tabs>
              </Box>
              <TabPanel value="1">
                <FaquestionContainer>
                  {props.BeginnersGuide.map(({ question, answer }, i) => (
                    <Faquestion key={i}>
                      <Heading>{question}</Heading>
                      <Subheading>{answer}</Subheading>
                    </Faquestion>
                  ))}
                </FaquestionContainer>
              </TabPanel>
              <TabPanel value="2">
                <FaquestionContainer>
                  {props.Security.map(({ question, answer }, i) => (
                    <Faquestion key={i}>
                      <Heading>{question}</Heading>
                      <Subheading>{answer}</Subheading>
                    </Faquestion>
                  ))}
                </FaquestionContainer>
              </TabPanel>
              <TabPanel value="3">
                <FaquestionContainer>
                  {props.IcoToken.map(({ question, answer }, i) => (
                    <Faquestion key={i}>
                      <Heading>{question}</Heading>
                      <Subheading>{answer}</Subheading>
                    </Faquestion>
                  ))}
                </FaquestionContainer>
              </TabPanel>
              <TabPanel value="4">
                <FaquestionContainer>
                  {props.InvestorsGuide.map(({ question, answer }, i) => (
                    <Faquestion key={i}>
                      <Heading>{question}</Heading>
                      <Subheading>{answer}</Subheading>
                    </Faquestion>
                  ))}
                </FaquestionContainer>
              </TabPanel>
            </TabContext>
          </FaqContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default FAQ;
