import styled from 'styled-components';
import { Heading, Subheading } from '../section/Section.styled';

export const FaqContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  .faqBox {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .tab {
    margin: 0px 20px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const FaqTextWrapper = styled.div`
  text-align: center;
  justify-content: center;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FaquestionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const Faquestion = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;

    ${Heading} {
      font-size: 1.3rem;
    }
    ${Subheading} {
      font-size: 0.8rem;
    }
  }
`;
