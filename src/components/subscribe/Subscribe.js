import { Button, Container } from "@material-ui/core";
import React from "react";
import { LeftAlign } from "../styles/LeftAlign.styled";
import {
  RightAlign,
  RightAlignForm,
  RightAlignText,
} from "../styles/RightAlign.styled";
import { StyledSubscribe, SubscribeContainer } from "./Subscribe.styled";
import Image from "../../assets/images/double_coin.svg";
const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeContainer>
          <LeftAlign>
            <img src={Image} alt="double coin" />
          </LeftAlign>
          <RightAlign>
            <RightAlignText>
              <p>We are building the fastest</p>
              <p>Blockchain platform which can</p>
              <p>process over 1 Million</p>
              <p>transactions per second.</p>
            </RightAlignText>
            <RightAlignForm>
              <h3>Stay Updated!</h3>
              <div>
                <input type="text" placeholder="example@gmail.com" />
                <Button>Submit</Button>
              </div>
            </RightAlignForm>
          </RightAlign>
        </SubscribeContainer>
      </Container>
    </StyledSubscribe>
  );
};

export default Subscribe;
