import styled from "styled-components";

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

  .heading {
    font: normal normal bold 40px/49px Gilroy ☞;
  }
  .subheading {
    font: normal normal normal 20px/40px SF UI Text;
    color: #4a4a4a;
  }
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
  color: #000000;
  font-weight: bold;

  &:last-child {
    max-width: 6rem;
  }
`;

export const DataBg = styled.div`
  background: ${({ bg }) => bg || "#000"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const BarWrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Bar = styled.div`
  width: 50px;
  height: 100%;
  background: #ddd;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0px auto;
`;
export const BarValue = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: ${({ marginBottom }) => marginBottom || ""};
`;
export const BarBg = styled.div`
  background: ${({ bg }) => bg || ""};
  height: ${({ height }) => height || ""};
  width: 100%;
  bottom: 0;
  position: absolute;
`;
