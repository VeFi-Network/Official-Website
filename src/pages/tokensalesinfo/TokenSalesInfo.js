import React from 'react';
import DoughnutChart from '../../components/Doughnut';
import { Heading, Subheading } from '../../styles/section/Section.styled';
import {
  ChartContainer,
  ChartData,
  Data,
  DataBg,
  Dataset,
  TokenSalesWrapper,
  BarWrapper,
  Bar,
  BarValue,
  BarBg,
} from '../../styles/tokensalesinfo/TokensalesInfo.styled';
import { TokenSupply } from '../../utility/data/TokenSales.Data';
import { Container, SectionWrapper } from '../../utility/GlobalStyle';

const TokenSalesInfo = (props) => {
  return (
    <>
      <SectionWrapper bg="#fff">
        <Container>
          <TokenSalesWrapper>
            <Heading size="sm" bold className="heading">
              {TokenSupply.heading}
            </Heading>
            <Subheading className="subheading">
              {TokenSupply.subheading}
            </Subheading>

            <BarWrapper>
              {TokenSupply.datasets.map((item, i) => (
                <Bar key={i}>
                  <BarValue marginBottom={item.margibBottom}>
                    {item.value}
                  </BarValue>
                  <BarBg bg={item.color} height={item.height}>
                    &nbsp;
                  </BarBg>
                </Bar>
              ))}
            </BarWrapper>

            <ChartData>
              {TokenSupply.datasets.map(({ label, color }, i) => (
                <Dataset key={i}>
                  <DataBg bg={color}></DataBg>
                  <Data>{label}</Data>
                </Dataset>
              ))}
            </ChartData>
          </TokenSalesWrapper>
          <TokenSalesWrapper>
            <Heading size="sm" bold>
              {props.heading}
            </Heading>
            <ChartContainer>
              <DoughnutChart />
            </ChartContainer>
            <ChartData>
              {props.datasets.map(({ label, value, color }, i) => (
                <Dataset key={i}>
                  <DataBg bg={color}></DataBg>
                  <Data>{value}</Data>
                  <Data>{label}</Data>
                </Dataset>
              ))}
            </ChartData>
          </TokenSalesWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default TokenSalesInfo;
