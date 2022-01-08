import styled from "styled-components";
import { Heading, Subheading } from "../section/Section.styled";

export const ModalHeadingContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  align-items: center;
  text-align: center;

  ${Heading} {
    font: normal normal bold 26px/44px Gilroy ☞;
    letter-spacing: 0px;
    color: #000000;
    text-transform: capitalize;
  }
`;
export const ModalCloseBtn = styled.div`
  text-align: right;
  .icon {
    font-size: 30px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    padding: 5px;
  }
`;
export const ModalContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
export const WalletInfo = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 50px;
    object-fit: contain;
    margin: 0;
    padding: 0;
    outline: none;
  }
  ${Subheading} {
    margin: 0;
    padding: 0;
    font-family: SF UI Text;
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 0px;
    color: #3a3939;
  }
`;
export const ModalFooter = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
  ${Subheading} {
    padding-bottom: 12px;
  }
  button {
    font: normal normal 600 14px/19px SF UI Text;
    padding: 12px 0px;
    width: 80%;
  }
`;
