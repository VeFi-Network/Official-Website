import React from 'react';
import { Countdown } from '../../components';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import {
  Circle,
  Column,
  ColumnHeadingWrapper,
  ColumWrapper,
  Content,
  HeadingWrapper,
  Row,
  RowContainer,
  TokenContainer,
  TokenSaleCountdown,
} from '../../styles/section/Tokenomics.styled';
import { Container } from '../../utility/GlobalStyle';

const Tokensale = (tokensale) => {
  return (
    <TokenContainer bg="#000">
      <Container>
        <HeadingWrapper>
          <Heading size="sm" fontColor="#fff" bold>
            {tokensale.title}
          </Heading>
        </HeadingWrapper>
        <RowContainer>
          <Row>
            <Column flex="1">
              <ColumWrapper>
                {tokensale.features.map((item, i) => (
                  <ColumnHeadingWrapper key={i}>
                    <Circle bg={item.color}></Circle>
                    <Content>
                      <Heading fontColor="#fff" bold>
                        {item.title}
                      </Heading>
                      <Subheading>{item.description}</Subheading>
                    </Content>
                  </ColumnHeadingWrapper>
                ))}
              </ColumWrapper>
            </Column>
            <Column flex="1">
              <TokenSaleCountdown>
                <Countdown bg="#000" border bgColor="var(--bg-blue)" />
              </TokenSaleCountdown>
            </Column>
          </Row>
        </RowContainer>
      </Container>
    </TokenContainer>
  );
};

export default Tokensale;
