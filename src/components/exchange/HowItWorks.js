import { Container, Divider } from "@material-ui/core";
import React from "react";
import {
  Content,
  StyledLayout,
  FloatContainerLeft,
  FloatContainerRight,
  HowItWorksContainer,
  StyledHowItWorks,
} from "./HowItWorks.styled";
import { MdLockOutline } from "react-icons/md";

import Steps from "./Steps";
import { AiFillCaretDown, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Left } from "../styles/Position.styled";
import { HeadingOne, Paragraph } from "../countdown/CountDown.styled";
import styled from "styled-components";
import { StyledButton } from "../header/Register";
import arrow_right from "../../assets/images/arrow_right.svg";
import arrow_left from "../../assets/images/arrow_left.svg";
export const Box = styled.div`
  display: flex;
  margin-top: 100px;
  height: 400px;
  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
  }
`;

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <Container maxWidth="md">
        <HowItWorksContainer>
          <Steps
            icon={<BiRefresh />}
            title="Unlimited transaction"
            desc="VEFI ensures high speed and more than lower transaction fees under large volumes of transaction."
          />
          <Divider orientation="vertical" flexItem />
          <Steps
            icon={<MdLockOutline />}
            title="Maximum security"
            desc="Trusted by tonnes of users for its absolute security. Your transactions are safe."
          />
          <Divider orientation="vertical" flexItem />
          <Steps
            icon={<AiOutlineUsergroupAdd />}
            title="Easy to use"
            desc="Every one enjoys an easy-to-use platform which is what VEFI offers its users."
          />
        </HowItWorksContainer>
      </Container>
      {/*
        <Container maxWidth="md">
        <Box width="100%" style={{ position: "relative" }}>
          <Content>
            <StyledLayout>
              <div>
                <HeadingOne color="black">VEFI Smart Chain</HeadingOne>
                <Paragraph color="black">
                  VEFI Smart Chain is a new generation High performance
                  Blockchain based on a unique consensus algorith (V-DPoS) with
                  the unique ability of processing over 1 million{" "}
                  <strong>Transaction per second</strong> with almost zero
                  transaction fees at a near instant processing time.
                </Paragraph>
              </div>
            </StyledLayout>
            <StyledLayout layout="row-reverse">
              <div>
                <HeadingOne color="black">VEFI Smart Chain</HeadingOne>
                <Paragraph color="black">
                  VEFI Smart Chain is a new generation High performance
                  Blockchain based on a unique consensus algorith (V-DPoS) with
                  the unique ability of processing over 1 million{" "}
                  <strong>Transaction per second</strong> with almost zero
                  transaction fees at a near instant processing time.
                </Paragraph>
              </div>
            </StyledLayout>
            <StyledLayout>
              <div>
                <HeadingOne color="black">VEFI Smart Chain</HeadingOne>
                <Paragraph color="black">
                  VEFI Smart Chain is a new generation High performance
                  Blockchain based on a unique consensus algorith (V-DPoS) with
                  the unique ability of processing over 1 million{" "}
                  <strong>Transaction per second</strong> with almost zero
                  transaction fees at a near instant processing time.
                </Paragraph>
              </div>
            </StyledLayout>
          </Content>
        </Box>
      </Container>
      */}
    </StyledHowItWorks>
  );
};

export default HowItWorks;
