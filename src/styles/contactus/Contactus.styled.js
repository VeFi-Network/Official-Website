import styled from 'styled-components';

export const TopLine = styled.div`
  padding: 15px 0px;
  text-transform: uppercase;
`;
export const SocialIconContainer = styled.div`
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;
export const SocialIcon = styled.a`
  margin-right: 10px;
`;
export const Icon = styled.img`
  margin-bottom: 5px;
  margin-right: 20px;
  width: 180px;
  height: 60px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 90px;
    height: 50px;
    margin-right: 0px;
  }
`;

export const ContactLink = styled.a`
  color: var(--faq-text-color);
  font-size: 0.8rem;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--heading-color);
  padding-top: 15px;
  &:hover {
    color: var(--text-color);
    transition: 0.5s all ease-in-out;
  }
  .icon {
    margin-left: 10px;
    color: var(--bg-green);
  }
`;
