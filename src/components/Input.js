import React from "react";
import styled from "styled-components";
const StyledInput = styled.input``;
const Input = ({ type, placeholder, value, width }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
    ></StyledInput>
  );
};

export default Input;
