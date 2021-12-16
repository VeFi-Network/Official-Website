import React from "react";
import { H1 } from "./Typography";

const AppBar = ({ label, className }) => {
  return (
    <div className={className}>
      <H1 size="30px">{label}</H1>
    </div>
  );
};

export default AppBar;
