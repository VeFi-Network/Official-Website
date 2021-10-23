import { Container } from "@material-ui/core";
import React from "react";
import Arrow from "../styles/Arrow";
import { CircleStyled } from "../styles/Position.styled";
import { H1 } from "../Typography";
import { StyledBanner, Left } from "./Banner.styled";

const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <Left>
          <H1>
            Revolutionizing Innovation in Blockchain Technology from{" "}
            <CircleStyled>Africa</CircleStyled>
            to the World.
          </H1>
        </Left>
        <Arrow className="hideOnMobile" />
      </Container>
    </StyledBanner>
  );
};

export default Banner;
