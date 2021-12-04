import React from 'react';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import {
  Box,
  BoxContent,
  BoxHeading,
  Column,
  ColumWrapper,
  HeadingWrapper,
  Row,
  RowContainer,
  TokenContainer,
} from '../../styles/section/Tokenomics.styled';
import { Container } from '../../utility/GlobalStyle';

const Token = (tokenomics) => {
  return (
    <>
      <TokenContainer id={tokenomics.id}>
        <Container>
          <HeadingWrapper>
            <Heading size="sm" bold>
              {tokenomics.title}
            </Heading>
            <Subheading>{tokenomics.subtitle}</Subheading>
          </HeadingWrapper>
          <RowContainer>
            <Row>
              <Column>
                <ColumWrapper>
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
              <Column></Column>
            </Row>
          </RowContainer>
        </Container>
      </TokenContainer>
    </>
  );
};

export default Token;
