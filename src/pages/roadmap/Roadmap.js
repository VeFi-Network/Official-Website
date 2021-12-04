import React from 'react';
import { FaqTextWrapper } from '../../styles/faq/Faq.styled';
import {
  Event,
  RoadmapContainer,
  Timeline,
  TimelineContent,
  TimelineLi,
  TimelineUl,
} from '../../styles/roadmap/Roadmap.styled';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import { Container, SectionWrapper } from '../../utility/GlobalStyle';

const Roadmap = (props) => {
  return (
    <>
      <SectionWrapper bg="#fff">
        <Container>
          <RoadmapContainer>
            <FaqTextWrapper>
              <Heading size="sm" bold>
                Preliminary Roadmap
              </Heading>
              <Subheading>{props?.subheading}</Subheading>
            </FaqTextWrapper>
            <Timeline>
              <TimelineUl>
                <TimelineContent>
                  <TimelineLi>
                    <Heading>Team formation on the 2th</Heading>
                    <Event>
                      <ul>
                        <li>
                          The Seed Sale will be conducted at a rate of 0.15 USD
                          = 1 VEF. The Seed Sale will also be conducted in ETH,
                          BTC, and USD.
                        </li>
                      </ul>
                    </Event>
                  </TimelineLi>
                </TimelineContent>
              </TimelineUl>
            </Timeline>
          </RoadmapContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Roadmap;
