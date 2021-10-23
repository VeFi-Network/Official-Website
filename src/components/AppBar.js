import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Display } from "./Grid";
import { H2 } from "./Typography";
import media from "../utility/Media";

const StyledAppBar = styled.div`
  display: flex;
  width: 100%;
  h2 {
    span {
      margin-left: 30px;
    }
  }
  ${media.mobile`

    h2 {
      font-size:24px;
      span {
        margin:0px;
      }
    }
    .icon{
      margin-left:10px;
    }
    .hideOnMobile {
      display: none;
    }
  `}
`;

const AppBar = ({ heading, icon }) => {
  return (
    <StyledAppBar>
      <Container maxWidth="md">
        <Card>
          <Display className="hideOnMobile" width="0.2"></Display>
          <Display width="1">
            <H2 FontWeight="600" size="30px">
              <span>{heading}</span>
              <span className="icon">{icon}</span>
            </H2>
          </Display>
        </Card>
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
