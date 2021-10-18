import { Container } from "@material-ui/core";
import React from "react";
import Arrow from "../styles/Arrow";
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
            <span>Africa</span> to the
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
