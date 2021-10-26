import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea``;
const TextArea = ({ cols, rows, placeholder }) => {
  return (
    <StyledTextArea
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></StyledTextArea>
  );
};

export default TextArea;
