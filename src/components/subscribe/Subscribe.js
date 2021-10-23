import { Button, Container } from "@material-ui/core";
import React from "react";
import { LeftAlign } from "../styles/LeftAlign.styled";
import { RightAlign, RightAlignForm, RightAlignText } from "../styles/RightAlign.styled";
import { StyledSubscribe, SubscribeContainer } from "./Subscribe.styled";
import Image from "../../assets/images/double_coin.svg";
import { H1, P } from "../Typography";
import { Space } from "../Divider";
import Input from "../Input";
const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeContainer>
          <LeftAlign className="hideOnMobile">
            <img src={Image} alt="double coin" />
          </LeftAlign>
          <RightAlign>
            <Space />
            <RightAlignText>
              <P>We are building the fastest</P>
              <P>Blockchain platform which can</P>
              <P>Process over 1 Million</P>
              <P>transactions Per second.</P>
            </RightAlignText>
            <RightAlignForm>
              <H1 FontWeight="400" size="30px">
                Stay Updated!
              </H1>
              <div className="inputFormContainer">
                <Input type="text" placeholder="example@gmail.com" />
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
