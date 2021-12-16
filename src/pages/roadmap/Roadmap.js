import React from "react";
import { FaqTextWrapper } from "../../styles/faq/Faq.styled";
import {
  Event,
  RoadmapContainer,
  Timeline,
  TimelineContent,
  TimelineLi,
  TimelineUl
} from "../../styles/roadmap/Roadmap.styled";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import { Container, SectionWrapper } from "../../utility/GlobalStyle";

const Roadmap = props => {
  return (
    <>
      <SectionWrapper bg="#fff" id={props.id}>
        <Container>
          <RoadmapContainer>
            <FaqTextWrapper>
              <Heading size="sm" bold className="heading">
                {props?.heading}
              </Heading>
              <Subheading>{props?.subheading}</Subheading>
            </FaqTextWrapper>
            <Timeline>
              <TimelineUl>
                <TimelineContent>
                  {props.events.map((event, i) => (
                    <TimelineLi key={i}>
                      <Heading bold>{event.title}</Heading>
                      <Event>
                        <ul>
                          {event.description.map((info, i) => (
                            <li key={i}>{info}</li>
                          ))}
                        </ul>
                      </Event>
                    </TimelineLi>
                  ))}
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
