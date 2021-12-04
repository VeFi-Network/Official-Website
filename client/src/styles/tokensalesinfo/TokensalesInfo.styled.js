import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  justify-content: center;

  .chart {
    height: 50% !important;
    width: 250px !important;
  }
  .bar {
    width: 50% !important;
    height: 300px !important;

    @media screen and (max-width: 768px) {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

export const TokenSalesWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ChartData = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 20px auto;
  flex-wrap: wrap;
`;

export const Dataset = styled.div`
  display: flex;
  flex: 0 0 20%;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex: 0 0 20%;
  }
`;

export const Data = styled.div`
  font-size: 0.7rem;
  color: var(--heading-color);

  &:last-child {
    max-width: 6rem;
  }
`;

export const DataBg = styled.div`
  background: ${({ bg }) => bg || '#000'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 5px;
`;
