import { Container } from "@material-ui/core";
import React from "react";
import Arrow from "../styles/Arrow";
import { CircleStyled } from "../styles/Position.styled";
import { StyledBanner, Left } from "./Banner.styled";

const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <Left>
          <h1>
            Revolutionizing <br />
            Innvation in <br />
            Blockchain
            <br />
            Technology from
            <br />
            <CircleStyled>Africa</CircleStyled> to the
            <br />
            World.
          </h1>
        </Left>
        <Arrow />
      </Container>
    </StyledBanner>
  );
};

export default Banner;
