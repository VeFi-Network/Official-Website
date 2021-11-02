import React from "react";
import { SectionHeading } from "./Section";
import { H1 } from "./Typography";

const AppBar = ({ label, className }) => {
  return (
    <>
      <SectionHeading className={className}>
        <div>
          <H1 size="30px">{label}</H1>
        </div>
      </SectionHeading>
    </>
  );
};

export default AppBar;
