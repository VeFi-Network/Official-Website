import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Display } from "./Grid";
import { H2 } from "./Typography";
const StyledAppBar = styled.div`
  display: flex;
  width: 100%;
  h2 {
      span{
          margin-left:30px;
      }
  }
  }
`;

const AppBar = ({ heading, icon }) => {
  return (
    <StyledAppBar>
      <Container maxWidth="md">
        <Card>
          <Display width="0.2"></Display>
          <Display width="1">
            <H2 FontWeight="600" size="30px">
              <span>{heading}</span>
              <span>{icon}</span>
            </H2>
          </Display>
        </Card>
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
