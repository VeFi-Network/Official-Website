import React from "react";
import {
  Card,
  SectionBannerWithBg,
  SectionCard,
  SectionHeadingContainer,
  SectionTypographyContainer,
  SectionWrapper
} from "../../components/Section";
import banner_product from "../../assets/images/banner_product.png";
import { Container } from "@material-ui/core";
import { H2, P } from "../../components/Typography";
import CardItem from "../../components/CardItem";
import { ListProduct } from "./ListProduct";
import CountdownTimer from "../../components/CountdownTimer";
import AppBar from "../../components/AppBar";
const Product = () => {
  return (
    <SectionWrapper>
      <SectionBannerWithBg bg={banner_product}>
        <Container>
          <SectionTypographyContainer>
            <H2 size="40px">
              From <span>Africa</span> to the world.
            </H2>
            <P size="27px" FontWeight="400" LineHeight="1.1em">
              The next big thing in the blockchain ecosphere where high speed meets scalability. A gift from Africa to
              the world.
            </P>
          </SectionTypographyContainer>
          <CountdownTimer />
        </Container>
      </SectionBannerWithBg>
      {/* Product and Services section */}
      <SectionHeadingContainer>
        <Container maxWidth="md">
          <AppBar label="Products &amp; Services" />
          <SectionCard className="SectionCard">
            {ListProduct.map(({ label, text }, i) => (
              <Card key={i}>
                <CardItem label={label} text={text} />
              </Card>
            ))}
          </SectionCard>
        </Container>
      </SectionHeadingContainer>
    </SectionWrapper>
  );
};

export default Product;
