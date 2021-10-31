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
import { SectionHeaderContainer } from "./Product.styled";
const Product = () => {
  return (
    <SectionWrapper>
      <SectionBannerWithBg bg={banner_product}>
        <SectionHeaderContainer>
          <Container>
            <SectionTypographyContainer>
              <H2 size="50px">
                From<span>Africa</span> to the world
              </H2>
              <P size="27px" FontWeight="400" LineHeight="1.1em">
                The next big thing in Blockchain when high speed meets scalability from Africa to the World.
              </P>
            </SectionTypographyContainer>
          </Container>
        </SectionHeaderContainer>
      </SectionBannerWithBg>
      <div className="countdownContainer">
        <CountdownTimer />
      </div>
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
