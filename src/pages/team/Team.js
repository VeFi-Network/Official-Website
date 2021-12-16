import React from "react";
import { Image } from "../../components";
import { FaqTextWrapper } from "../../styles/faq/Faq.styled";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import {
  TeamContainer,
  TeamMember,
  TeamWrapper,
  TeamMemeberImage,
  TeamMemberName,
  TeamMemberRole,
  SocialLinks
} from "../../styles/team/Team.styled";
import { Container, SectionWrapper } from "../../utility/GlobalStyle";
import { FiTwitter, FaLinkedinIn } from "../../utility";
const Team = props => {
  return (
    <>
      <SectionWrapper id={props.id}>
        <Container>
          <TeamContainer>
            <FaqTextWrapper>
              <Heading size="sm" bold className="teamheading">
                {props.heading}
              </Heading>
              <Subheading>{props.subheading}</Subheading>
            </FaqTextWrapper>
            <TeamMember>
              {props.team.map((user, i) => (
                <TeamWrapper key={i}>
                  <TeamMemeberImage>
                    <Image img={user.image} alt={user.name} />
                  </TeamMemeberImage>
                  <TeamMemberName>
                    <Heading>{user.name}</Heading>
                  </TeamMemberName>
                  <TeamMemberRole>
                    <Subheading>{user.role}</Subheading>
                  </TeamMemberRole>
                  {user.socialmedia.twitter && (
                    <SocialLinks href={user.socialmedia.twitter} target="_blank">
                      <FiTwitter />
                    </SocialLinks>
                  )}
                  {user.socialmedia.linkedln && (
                    <SocialLinks href={user.socialmedia.linkedln} target="_blank">
                      <FaLinkedinIn />
                    </SocialLinks>
                  )}
                </TeamWrapper>
              ))}
            </TeamMember>
          </TeamContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Team;
