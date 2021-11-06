import styled from "styled-components";
import { CounterTimerBox } from "../home/Home.styled";
import media from "../../utility/Media";
export const StyledTokenSalesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px 0px;
`;

export const StyledTokenSaleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  > div {
    flex: 0.5;
    margin-right: 10px;
    height: 100%;

    &:last-child {
      margin-right: 0px;
    }
  }

  ${media.mobile`
    width:100%;
    flex-direction:column-reverse;
    > div{
        flex:1;
        width:100%;
        margin:0px;
    }
  `}
`;

export const StyledTokenSalesCountDownContainer = styled.div`
  color: var(--text-gray);
  text-align: center;
  justify-content: center;
  padding: 20px 30px;
  background: #06041e;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 10px 25px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 8px;
  }

  ${media.mobile`
    padding-bottom:50px;
    h1{
        font-size:1.5rem;
    }
  `}
  ${media.small`
    padding-bottom:50px;
    h1{
        font-size:1.5rem;
    }
  `}
`;

export const StyledTokenSalesDesc = styled.div`
  padding: 20px 30px;
  color: var(--def-color) !important;

  p {
    margin: 10px 0px;
    padding-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      span {
        margin-right: 10px;

        &:first-child {
          color: var(--bg-dark);
          font-size: 1.8rem;
        }
        &:last-child {
          font-size: 1.3rem;
          font-weight: normal;
        }
      }
    }
  }

  ${media.mobile`
    padding:0px 0px 30px 10px;
    p{
        font-size:1.2rem;
    }
    h1{
        font-size:2.2rem;
    }
    ul{
        flex-direction:column;
    }
  `}
  ${media.small`
    padding:0px 0px 30px 10px;
    p{
        font-size:1.2rem;
    }
    h1{
        font-size:2.2rem;
    }
    ul{
        flex-direction:column;
    }
  `}
`;
export const StyledTokenCounterTimerBox = styled(CounterTimerBox)`
  color: var(--text-white);
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;

  span {
    font-size: 1.5rem;
  }
  ${media.mobile`
    span{
        font-size:1rem;
    }
  `}
  ${media.small`
    span{
        font-size:1rem;
    }
  `}
`;

export const StyledTokenSaleStat = styled.div`
  width: 100%;
  padding: 20px 0px;
  color: var(--text-gray);
  font-weight: normal;
  p {
    font-size: 1rem;
    font-weight: normal;
  }
  .box {
    background: whitesmoke;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
  }
  .progress {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 5px;
    color: var(--text-gray);
    text-transform: uppercase;
    font-size: 0.85rem;
    span {
      &:first-child {
        margin-left: 5px;
        color: white;
      }
      &:last-child {
        margin-right: 8px;
      }
    }
  }

  ${media.mobile`

  `}
`;
