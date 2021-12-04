import styled from 'styled-components';
import { Subheading } from '../section/Section.styled';

export const TeamContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    .teamheading {
      font-size: var(--font-sm);
      font-weight: 600;
    }
  }
`;
export const TeamMember = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const TeamWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  word-wrap: break-word;
`;
export const TeamMemeberImage = styled.div`
  width: 100%;
  height: 260px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      height: 250px;
      width: 250px;
    }
  }
`;
export const TeamMemberName = styled.div``;
export const TeamMemberRole = styled.div`
  margin-bottom: 10px;

  ${Subheading} {
    padding: 0px;
    font-size: small;
  }
`;
export const SocialLinks = styled.a`
  color: var(--heading-color);
  margin: 0px 5px;
  transition: 0.8s all ease-in-out;
  &:hover {
    color: var(--bg-blue);
    transition: 0.8s all ease-in-out;
  }
`;
