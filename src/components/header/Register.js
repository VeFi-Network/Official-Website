import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Button } from "@material-ui/core";
export const Register = () => {
  return (
    <>
      <Button variant="contained" color="primary" endIcon={<AiOutlineSend />}>
        join our community
      </Button>
    </>
  );
};
