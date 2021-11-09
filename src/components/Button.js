import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ bg }) => bg || "#1673B9"};
  font-size: 12px;
  border-radius: 5px;
  display: flex;
  color: ${({ fontColor }) => fontColor || "#fff"};
  cursor: pointer;
  align-items: center;
  border: none;
  padding: 5px 20px;
  &:hover {
    opacity: 0.9;
  }
  span {
    font-size: 20px !important;
    margin-left: 5px;
  }
  .icon {
    font-size: 15px !important;
    margin-left: 8px;
    margin-right: 8px;
  }
`;
export const Button = ({ icon, label, action }) => {
  return (
    <>
      <StyledButton onClick={action}>
        {label}
        <span>{icon}</span>
      </StyledButton>
    </>
  );
};
