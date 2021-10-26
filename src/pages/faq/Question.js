import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Question = ({ label, text }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaAngleDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{label}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{text}</p>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Question;
