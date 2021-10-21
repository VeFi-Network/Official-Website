import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  div {
    display: flex;
  }
`;

export const Display = styled.div`
  flex: ${({ width }) => width || "1"};
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  position: relative;

  p {
    margin-bottom: 10px;
  }
`;
