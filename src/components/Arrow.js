import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
export const StyledArrow = styled.div`
  img {
    position: absolute;
    bottom: 1;
    left: 32%;
    height: 150px;
  }
`;

const Arrow = () => {
  return (
    <StyledArrow>
      <img src={arrow} alt="" />
    </StyledArrow>
  );
};

export default Arrow;
