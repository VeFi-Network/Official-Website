import React from "react";
import { Image } from "../../components/Image";
import styled from "styled-components";
import { MdFacebook } from "react-icons/md";
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import media from "../../utility/Media";

const StyledUserContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    display: flex;
    object-fit: cover;
  }
  div {
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #fff;
    padding: 8px;
    display: flex;

    > * {
      margin-right: 8px;
      font-size: 20px;
    }
  }

  ${media.mobile`
    width:100%;
    margin:0px;
    
    img{
      margin:0px 0px 10px 0px;
    }
    div{
      padding:20px 10px;
    }
  `}
`;
const User = ({ img }) => {
  return (
    <>
      <StyledUserContainer>
        <Image src={img} />
        <div>
          <MdFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiLinkedin />
          <FiGithub />
        </div>
      </StyledUserContainer>
    </>
  );
};

export default User;
