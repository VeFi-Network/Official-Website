import styled from "styled-components";
import { Heading, Subheading } from "../section/Section.styled";

export const BuyNowModalWrapper = styled.div`
  padding: 10px 0px;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const WalletAddressWrapper = styled.div`
  align-items: center;
  display: flex;
  background: #4fd09e1a;
  border-radius: 28px;
  padding: 8px 15px;
  color: #105dcf;
  img {
    height: 20px;
    width: 100%;
    object-fit: contain;
  }
  span:nth-child(1) {
    margin-right: 5px;
  }
  span:nth-child(2) {
    margin-right: 5px;
  }
`;
export const ModalCloseWrapper = styled.div`
  margin-left: 20px;

  .icon {
    background: rgba(0, 0, 0, 0.2);
    padding: 4px;
    font-size: 26px;
    border-radius: 50%;
    color: #111 !important;
    cursor: pointer;
  }
`;
export const ModalContent = styled.div`
  padding: 30px 30px 0px 30px;
  @media screen and (max-width: 768px) {
    padding: 30px 5px 0px 5px;
  }
  width: 90%;
  margin: 0px auto;
  ${Heading} {
    text-align: center;
    font: normal normal bold 20px/10px Gilroy ☞;
  }
  ${Subheading} {
    text-align: center;
    font: normal normal normal 13px/15px SF UI Text;
  }
`;
export const FormWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const InputFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 5px;
  margin-bottom: 5px;

  span {
    font-size: 10px;
    font-weight: 400;
    font-family: SF UI Text;
  }
`;
export const InputForm = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  img {
    width: 25px;
    height: 25px;
    margin: 0px 5px;
    object-fit: contain;
  }
  span {
    font-size: 0.9rem;
    margin: 0px 3px;
    opacity: 0.7;
  }
  span:nth-child(3) {
    font-size: small;
  }
  input {
    width: 100%;
    margin-right: 8px;
    padding: 8px;
    background: transparent;
    border: none;
    outline: none;
    text-align: right;
    font-size: 24px;
  }
`;

export const ModalButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  button {
    font-size: 13px;
    width: 80%;
  }
`;

export const ModalArrowContainer = styled.div`
  margin: 20px 0px;
  text-align: center;

  img {
    padding-top: 10px;
    outline: 0;
  }
`;
