import React from "react";
import { SectionHeading } from "./Section";
import { H1 } from "./Typography";

const AppBar = ({ label, className }) => {
  return (
    <>
      <SectionHeading className={className}>
        <H1 size="30px">{label}</H1>
      </SectionHeading>
    </>
  );
};

export default AppBar;
