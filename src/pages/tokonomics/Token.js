import React from "react";
import { Heading, Subheading } from "../../styles/section/Section.styled";
import {
  Box,
  BoxContent,
  BoxHeading,
  Column,
  ColumWrapper,
  HeadingWrapper,
  Row,
  RowContainer,
  TokenContainer
} from "../../styles/section/Tokenomics.styled";
import { Container } from "../../utility/GlobalStyle";

const Token = tokenomics => {
  return (
    <>
      <TokenContainer id={tokenomics.id}>
        <Container>
          <HeadingWrapper>
            <Heading size="sm" bold className="tokenomics">
              {tokenomics.title}
            </Heading>
            <Subheading className="tokenomicsSub">{tokenomics.subtitle}</Subheading>
          </HeadingWrapper>
          <RowContainer>
            <Row>
              <Column flex="0.6">
                <ColumWrapper className="token">
                  {tokenomics.info.map((item, i) => (
                    <Box key={i}>
                      <BoxHeading>
                        <Heading>{item.title}</Heading>
                      </BoxHeading>
                      <BoxContent>{item.label}</BoxContent>
                    </Box>
                  ))}
                </ColumWrapper>
              </Column>
              <Column flex="0.4"></Column>
            </Row>
          </RowContainer>
        </Container>
      </TokenContainer>
    </>
  );
};

export default Token;
