import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { SectionHeading } from "./Section";
import { H1 } from "./Typography";

const AppBar = ({ label, className }) => {
  return (
    <>
      <SectionHeading className={className}>
        <div></div>
        <div>
          <H1 size="30px">{label}</H1>
        </div>
        <div>
          <FaAngleDown />
        </div>
      </SectionHeading>
    </>
  );
};

export default AppBar;
