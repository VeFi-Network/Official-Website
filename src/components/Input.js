import React from "react";

const Input = ({ type, ...children }) => {
  return (
    <>
      <input type={type} {...children} />
    </>
  );
};

export default Input;
