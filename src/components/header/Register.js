import React from "react";

import { Button } from "@material-ui/core";

export const StyledButton = ({ icon, text }) => {
  return (
    <>
      <Button variant="contained" color="primary" endIcon={icon}>
        {text}
      </Button>
    </>
  );
};
