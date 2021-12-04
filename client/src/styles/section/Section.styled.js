import styled from 'styled-components';
import { LinkRouter } from '../../utility';

export const HeroSectionContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  background: url(${({ bg }) => bg || ''});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;

  @media screen and (max-width: 768px) {
    background-position: left;
    background-size: contain;
  }
`;

export const SectionRow = styled.div`
  display: flex;
  padding: 80px 0px;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

  @media screen and (max-width: 768px) {
    padding: 40px 0px;
  }
`;
export const SectionColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  padding: 50px 0px;
`;
export const Heading = styled.div`
  font-size: ${(props) =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
  font-family: 'SF UI Text SemiBold';
  color: ${({ fontColor }) => fontColor || 'var(--heading-color)'};
  line-height: 1.3;
  font-weight: ${({ bold }) => (bold ? '600' : 'medium')};

  @media screen and (max-width: 768px) {
    font-size: ${(props) =>
      props.size === 'sm'
        ? '1.1rem'
        : props.size === 'md'
        ? '2rem'
        : props.size === 'bg'
        ? '2.5rem'
        : '14px'};
  }
`;
export const Subheading = styled.p`
  padding: 15px 0px 30px 0px;
  max-width: ${({ mxWidth }) => mxWidth || ''};
  font-size: 0.9rem;
  color: ${({ fontColor }) => fontColor || ''};

  @media screen and (max-width: 768px) {
    font-size: small;
  }
`;
export const Link = styled(LinkRouter)``;

export const InfoSec = styled.section`
  height: 100%;
  background: var(--bg-color);
  width: 100%;
  color: #fff;
  padding: 80px 0px;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 40px 0px;

    ${Heading} {
      font-size: var(--font-sm);
    }
  }
`;

export const InfoRow = styled.div`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  margin-top: 80px;

  img {
    width: 100%;
    height: 200px;
    margin-top: 50px;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0px;
    text-align: center;
    align-items: center;

    img {
      width: 100%;
      height: 200px;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const InfoTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  justify-content: left;
  align-items: flex-start;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoHeading = styled.div`
  padding: 10px 0px;
  @media screen and (max-width: 768px) {
    ${Heading} {
      font-size: var(--font-sm);
    }
  }
`;
export const InfoDescription = styled.div`
  @media screen and (max-width: 768px) {
    ${Subheading} {
      font-size: 0.85rem;
      line-height: 1.8;
    }
  }
`;

export const SectionContainer = styled.section`
  padding: 80px 0px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const SectionHeading = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: ${({ mxWidth }) => mxWidth || ''};
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    .subheading {
      font-size: small;
    }
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 10px;
  justify-content: space-between;
  margin-top: 30px;

  .heading {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    .subheading {
      font-size: small;
    }
    .heading {
      font-size: 1.3rem;
    }
  }
`;
export const SectionItem = styled.div`
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;

  ${Heading} {
    font-family: 'SF UI Text Regular';
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;
export const SectionImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const SectionImgContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
export const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
