import styled from "styled-components";

export const RightAlign = styled.div`
  display: flex;
  flex: 0.4;
  width: 100%;
  flex-direction: column;
`;

export const RightAlignText = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2em;
  }
`;

export const RightAlignForm = styled.div`
  h3 {
    font-weight: 600;
    font-size: 18px;
  }
  div {
    width: 90%;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input {
    width: 79%;
    padding: 15px 10px;
    border: none;
    background: transparent;
    outline: none;
  }
  button {
    border: none;
    background: black;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    text-transform: lowercase !important;

    &:hover {
      background: #000;
    }
  }
`;
