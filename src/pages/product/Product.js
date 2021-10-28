import React from "react";
import {
  Card,
  SectionBannerWithBg,
  SectionCard,
  SectionCountdown,
  SectionCountDownButton,
  SectionCountDownTimerContainer,
  SectionHeading,
  SectionHeadingContainer,
  SectionTime,
  SectionTimer,
  SectionTypographyContainer,
  SectionWrapper,
} from "../../components/Section";
import banner_product from "../../assets/images/banner_product.png";
import { Container } from "@material-ui/core";
import { H1, H2, H3, P } from "../../components/Typography";
import { StyledButton } from "../../components/Button";
import { FaAngleDown } from "react-icons/fa";
import CardItem from "../../components/CardItem";
import { ListProduct } from "./ListProduct";
const Product = () => {
  return (
    <SectionWrapper>
      <SectionBannerWithBg bg={banner_product}>
        <Container>
          <SectionTypographyContainer>
            <H2 size="40px">
              From <span>Africa</span> to the world
            </H2>
            <P size="27px" FontWeight="400" LineHeight="1.1em">
              The next big thing in Blockchain when high speed meets scalability
              from Africa to the World.
            </P>
          </SectionTypographyContainer>
          <SectionCountDownTimerContainer>
            <SectionTimer>
              <P size="24px">Pre-Sale ICO starts In</P>
              <SectionCountdown>
                <SectionTime>
                  <H3 size="34px" FontColor="#fefcea" FontWeight="600">
                    46
                  </H3>
                  <P size="14px" FontColor="#fefcea" FontWeight="500">
                    Days
                  </P>
                </SectionTime>
                <span>:</span>
                <SectionTime>
                  <H3 size="34px" FontColor="#fefcea" FontWeight="600">
                    12
                  </H3>
                  <P sixe="14px" FontColor="#fefcea" FontWeight="500">
                    Hours
                  </P>
                </SectionTime>
                <span>:</span>
                <SectionTime>
                  <H3 size="34px" FontColor="#fefcea" FontWeight="600">
                    05
                  </H3>
                  <P size="14px" FontColor="#fefcea" FontWeight="500">
                    Min
                  </P>
                </SectionTime>
                <span>:</span>
                <SectionTime>
                  <H3 size="34px" color="#fefcea" FontWeight="600">
                    56
                  </H3>
                  <P size="14px" color="#fefcea" FontWeight="500">
                    Sec
                  </P>
                </SectionTime>
              </SectionCountdown>
              <SectionCountDownButton>
                <StyledButton bg="#FBf6B4" fontColor="#000">
                  whitepapper
                </StyledButton>
                <StyledButton bg="#FBf6B4" fontColor="#000">
                  join the waitlist
                </StyledButton>
              </SectionCountDownButton>
            </SectionTimer>
          </SectionCountDownTimerContainer>
        </Container>
      </SectionBannerWithBg>
      {/* Product and Services section */}
      <SectionHeadingContainer>
        <Container maxWidth="md">
          <SectionHeading>
            <div></div>
            <div>
              <H1 size="30px">Products &amp; Services</H1>
            </div>
            <div>
              <FaAngleDown />
            </div>
          </SectionHeading>
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
