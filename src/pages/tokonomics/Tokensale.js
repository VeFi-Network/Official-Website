import React from "react";
import { Countdown } from "../../components";
import { Heading, Subheading } from "../../styles/section/Section.styled";
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
  BgContainer
} from "../../styles/section/Tokenomics.styled";
import { VefiCoinBg } from "../../utility";
import { Container } from "../../utility/GlobalStyle";

const Tokensale = tokensale => {
  return (
    <TokenContainer bg="#000" opacity="0.9">
      <BgContainer bg={VefiCoinBg}>
        <Container>
          <HeadingWrapper>
            <Heading size="sm" fontColor="#fff" bold className="tokenSaleHeading">
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
                  <Countdown bg="#000" hoverBg="var(--bg-green)" border bgColor="var(--bg-blue)" textBg="#82aee7" />
                </TokenSaleCountdown>
              </Column>
            </Row>
          </RowContainer>
        </Container>
      </BgContainer>
    </TokenContainer>
  );
};

export default Tokensale;
