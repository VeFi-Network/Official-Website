import { Container, Divider } from "@material-ui/core";
import React from "react";
import { HowItWorksContainer, StyledHowItWorks } from "./HowItWorks.styled";
import { MdLockOutline } from "react-icons/md";

import Steps from "./Steps";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  margin-top: 100px;
  height: 400px;
  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 21px;
  }
`;

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <Container maxWidth="md">
        <HowItWorksContainer>
          <Steps
            icon={<BiRefresh />}
            title="Unlimited Transaction"
            desc="VEFI ensures high speed and low transaction fees for large volumes of transaction."
          />
          <Divider orientation="vertical" flexItem />
          <Steps
            icon={<MdLockOutline />}
            title="Maximum security"
            desc="Trusted by tons of users for its absolute security."
          />
          <Divider orientation="vertical" flexItem />
          <Steps
            icon={<AiOutlineUsergroupAdd />}
            title="Easy to use"
            desc="Every one enjoys an easy-to-use platform which is what VEFI offers."
          />
        </HowItWorksContainer>
      </Container>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
