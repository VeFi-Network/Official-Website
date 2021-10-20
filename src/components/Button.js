import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({ bg }) => bg || "blue"};
  font-size: 12px !important;
  border-radius: 5px;
  display: flex;
  color: #fff;
  cursor: pointer;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.19);
  padding: 5px 20px;
  &:hover {
    opacity: 0.6;
  }
  span {
    font-size: 20px !important;
    margin-left: 5px;
  }
`;
export const Button = ({ icon, text, action }) => {
  return (
    <>
      <StyledButton onClick={action}>
        {text}
        <span>{icon}</span>
      </StyledButton>
    </>
  );
};
