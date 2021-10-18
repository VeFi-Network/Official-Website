import { Container } from "@material-ui/core";
import React from "react";
import { StyledHeroBanner } from "./HeroBanner.styled";
const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <Container>
        <h1>Banner</h1>
      </Container>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
