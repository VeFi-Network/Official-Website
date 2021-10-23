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
          <H1 size="50px">Revolutionizing</H1>
          <H1 size="50px">Innovation in</H1>
          <H1 size="50px">Blockchain</H1>
          <H1 size="50px">Technology</H1>
          <H1 size="50px">
            from <CircleStyled>Africa</CircleStyled>
          </H1>
          <H1 size="50px">to the World.</H1>
        </Left>
        <Arrow />
      </Container>
    </StyledBanner>
  );
};

export default Banner;
