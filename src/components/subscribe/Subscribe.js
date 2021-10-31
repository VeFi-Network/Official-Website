import { Container } from "@material-ui/core";
import React from "react";
import { StyledSubscribe } from "./Subscribe.styled";
import styled from "styled-components";
import media from "../../utility/Media";
import coin_image from "../../assets/images/double_coin.svg";
import { StyledButton } from "../Button";
const SubscribeFormText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;

  ${media.mobile`
    width:100%;
    text-align:center;
    
  `}
  ${media.small`
    width:100%;
  `}
`;
const SubscribeContainer = styled.div`
  display: flex;
  width: 100%;
  div {
    flex: 0.5;
  }
  .mobile {
    text-align: center;
  }
  ${media.mobile`
    display:flex;
    flex-direction:column;
    .mobile{
      display:none;
    }
  `}
  ${media.small`
    display:flex;
    flex-direction:column;
    .mobile{
      display:none;
    }
  `}
`;
const SubscribeFormContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1em;
    max-width: 28ch;
    font-family: "Open Sans", sans-serif;
    color: #383838;
  }
  h3 {
    font-size: 24px;
    font-weight: 400;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    color: #161525;
  }

  .subscribeFOrm {
    width: 380px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    padding: 5px;
    margin: 0px;
    margin-top: 10px;

    input {
      width: 100%;
      padding: 8px 10px;
      outline: none;
      border: none;
      background: transparent;
      margin-right: 10px;
      font-weight: 600;
    }
    button {
      padding: 3px 20px;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  ${media.mobile`
    h1{
      font-size:24px;
      overflow-wrap: break-all;
      font-weight:400;
    }
    h3{
      font-size:30px;
    }
    .subscribeFOrm{
      width:100%;
      padding: 10px;
      display:flex;
      input{
        font-weight:400;
        font-size:18px;
        color:#131313;
        padding:10px;
        letter-spacing:2px;
      }
      button{
        color:#fff;
        padding:0px 35px;
        border-radius:8px;
        font-size:18px;
        text-transform:lowercase;
        font-weight:600;
        background:#1673b9;
        letter-spacing:2px;
      }
    }
  `}
  ${media.small`
    h1{
      font-size:20px;
      overflow-wrap: break-word;
      font-weight:400;
    }
    h3{
      font-size:24px;
    }
    .subscribeFOrm{
      width:100%;
      padding: 10px;

      input{
        font-weight:400;
        font-size:14px;
        color:#131313;
        padding:10px;
      }
    }
  `}
`;
const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeFormText>
          <SubscribeContainer>
            <div className="mobile">
              <img src={coin_image} alt="" />
            </div>
            <div>
              <SubscribeFormContainer>
                <h1>
                  We are building the fastest Blockchain platform which can process over 1 million transactions per
                  second.
                </h1>
                <h3>Stay Updated!</h3>
                <div className="subscribeFOrm">
                  <input type="text" placeholder="example@email.com" />
                  <StyledButton bg="#000">Submit</StyledButton>
                </div>
              </SubscribeFormContainer>
            </div>
          </SubscribeContainer>
        </SubscribeFormText>
      </Container>
    </StyledSubscribe>
  );
};

export default Subscribe;
