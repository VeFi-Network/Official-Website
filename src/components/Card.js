import React from "react";
import { P } from "./Typography";
import styled from "styled-components";
import media from "../utility/Media";

const StyledCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  div:nth-child(1) {
    flex: 0.5;
    text-align: right;

    img {
      margin-right: 20px;
      object-fit: contain;
    }
  }

  div:nth-child(2) {
    flex: 1;
    flex-direction: column;

    p {
      font-weight: 500;
      line-height: 1.3em;
    }
  }

  ${media.mobile`
    flex-direction:column;
    padding:0px 30px;
    div:nth-child(1){
      display:none
    }
  `}

  ${media.small`
  flex-direction:column;
  padding:0px 30px;
  div:nth-child(1){
    display:none
  }
  `}
`;
const Card = ({ img, text, width, height }) => {
  return (
    <StyledCard>
      <div>
        <img src={img} alt="circle_image" width={width} height={height} />
      </div>
      <div>
        <P size="24px">{text}</P>
      </div>
    </StyledCard>
  );
};

export default Card;
