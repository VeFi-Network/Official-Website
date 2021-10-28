import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { H2, P } from "./Typography";

const CardItem = ({ label, text }) => {
  return (
    <>
      <span>
        <FaCheckSquare />
      </span>
      <span>
        <H2 size="24px">{label}</H2>
      </span>
      <span>
        <P size="14px" LineHeight="1.4em" FontWeight="400">
          {text}
        </P>
      </span>
    </>
  );
};

export default CardItem;
