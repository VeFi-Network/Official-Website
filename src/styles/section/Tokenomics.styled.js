import styled from "styled-components";
import { Heading, Subheading } from "./Section.styled";

export const TokenContainer = styled.section`
  width: 100%;
  padding: 80px 0px 50px 0px;
  height: 100%;
  background: ${({ bg }) => bg || ""};
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 40px 0px;
  }
`;

export const HeadingWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  max-width: 90ch;
  width: 100%;
  margin: 0px auto;

  .tokenomics {
    font: normal normal bold 40px/64px Gilroy ☞;
  }
  .tokenomicsSub {
    font: normal normal normal 18px/30px SF UI Text;
  }
  .tokenSaleHeading {
    font: normal normal bold 40px/64px Gilroy ☞;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    .tokenomicsSub {
      font-size: 22px;
      line-height: 1.8em;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Column = styled.div`
  flex: ${({ flex }) => flex || "1"};
  margin-right: 10px;
  height: 100%;

  &:last-child {
    margin-right: 0px;
    flex: ${({ flex }) => flex || "0.5"};
    margin-left: 20px;

    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    height: 100%;
  }
`;
export const ColumWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;
export const Box = styled.div`
  display: flex;
  flex: 0 0 31%;
  flex-direction: column;
  margin: 20px 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
    flex: 1 0 50%;
    text-align: center;
  }
`;
export const BoxHeading = styled.div`
  ${Heading} {
    font: normal normal 600 20px/30px Gilroy ☞;
    color: var(--bg-blue);
  }

  @media screen and (max-width: 768px) {
    ${Heading} {
      font-size: 26px;
    }
  }
`;
export const BoxContent = styled.div`
  font-size: 18px;
  max-width: 17ch;
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const RowContainer = styled.div`
  width: 100%;
  display: flex;

  .token {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 5px;
    ${BoxContent} {
      max-width: 35ch;
      font: normal normal normal 18px/30px SF UI Text;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const ColumnHeadingWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Circle = styled.span`
  background: ${({ bg }) => bg || ""};
  width: 13px;
  height: 13px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    width: 14px;
    height: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${Subheading} {
    color: #ccc;
    font-size: 1rem;
    max-width: 30rem;
  }

  @media screen and (max-width: 768px) {
    ${Subheading} {
      font-size: 0.8rem;
    }
    ${Heading} {
      font-size: 1rem;
    }
  }
`;

export const TokenSaleCountdown = styled.div`
  padding: 30px 0px;
`;
