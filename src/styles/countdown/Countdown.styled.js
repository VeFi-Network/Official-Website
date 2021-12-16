import styled from 'styled-components';

export const CountdownContainer = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 40px;
  }
`;

export const CountdownWrapper = styled.div`
  background: ${({ bg }) => bg || '#000'};
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  border-radius: 30px;
  color: #fff;
  width: 100%;
  max-width: 450px;
  border: ${({ border }) => (border ? '2px solid var(--bg-blue)' : 'none')};
  @media screen and (max-width: 768px) {
  }
`;
export const CountdownTextWrapper = styled.div`
  padding: 20px 0px;
`;
export const CountdownProgressBar = styled.div`
  .progress {
    height: 10px;
    border-radius: 5px;
    background: #fff;
    > span {
      background: var(--bg-green);
    }
  }
`;
export const CountdownTimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;
export const Timer = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: var(--font-sm);
    margin-bottom: 2px;
  }
  span:last-child {
    font-size: 0.7rem;
    color: #efefef;
  }
`;
export const CountdownHeading = styled.div`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
  font-size: ${({ sm }) => (sm ? 'var(--font-sm)' : '1rem')};
  font-weight: ${({ bold }) => (bold ? '600' : '')};
  padding: 10px 0px;
  font-family: var(--fm-bold);
`;

export const CountdownBtn = styled.div`
  padding: 30px 0px 10px 0px;
  width: 100%;

  button {
    width: 100%;
  }
`;
