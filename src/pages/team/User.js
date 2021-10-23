import React from "react";
import { Image } from "../../components/Image";
import styled from "styled-components";
const StyledUserContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:100%:
  height:200px;
  background:green;
  justify-content: space-between;

  img {
    width: 200px;
    height: 200px;
    display:flex;
    object-fit: contain;
  }
`;
const User = ({ img }) => {
  return (
    <>
      <StyledUserContainer>
        <Image src={img} />
      </StyledUserContainer>
    </>
  );
};

export default User;
