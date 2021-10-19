import { Container } from "@material-ui/core";
import React from "react";
import { HeadingOne } from "../../countdown/CountDown.styled";
import { StyledAboutUsBannerTop } from "./Banner.styled";

const Banner = () => {
  return (
    <StyledAboutUsBannerTop>
      <Container>
        <HeadingOne>
          Changing the world's future to make <br /> the world work better for
          us all.
        </HeadingOne>
      </Container>
    </StyledAboutUsBannerTop>
  );
};

export default Banner;
