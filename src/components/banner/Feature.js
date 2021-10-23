import { Button } from "@material-ui/core";
import React from "react";
import { StyledFeature } from "./Features.styled";

const Feature = ({ Icon, Text }) => {
  return (
    <StyledFeature>
      <Button variant="contained" color="secondary" startIcon={Icon}>
        {Text}
      </Button>
    </StyledFeature>
  );
};

export default Feature;
