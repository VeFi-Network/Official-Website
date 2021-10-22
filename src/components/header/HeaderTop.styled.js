import styled from "styled-components";

export const HeaderTop = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 10;

  @media() {
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
`;

export const HeaderCenter = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #00062AF;
    font-weight: 600;
    margin: 0px 10px;
    font-size: 16px;
    text-transform: capitalize;
  }

  @media screen and (max-width: ${({ theme }) => theme.iPhone_11}) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;

  button {
    text-transform: capitalize;
  }

  @media screen and (max-width: ${({ theme }) => theme.iPhone_11}) {
    flex: 1;
    margin-left: 40px;
    margin-right: 20px;
  }
`;
