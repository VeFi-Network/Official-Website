import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledFeature = styled.span`
  button {
    margin: 5px 10px;
    background: #fafafa;
    color: #333;
    text-transform: inherit;

    &:hover {
      background: #fafafa;
    }
  }
`;
const Feature = ({ Icon, Text }) => {
  return (
    <>
      <StyledFeature>
        <Button variant="contained" color="secondary" startIcon={Icon}>
          {Text}
        </Button>
      </StyledFeature>
    </>
  );
};

export default Feature;
