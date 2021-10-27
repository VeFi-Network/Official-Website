import styled from "styled-components";
import banner from "../../assets/images/banner.svg";
import media from "../../utility/Media";
export const StyledBanner = styled.div`
  background: url(${banner});
  padding-top: 60px;
  width: 100%;
  height: 550px; /* You must set a specified height */
  background-position: left; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  display: flex;
  position: relative;

  ${media.mobile`
  padding-top: 50px;
  background-position: center;
  background-size: cover;
  height:100vh;
  background:red;
  img{
    display:none;
  }
  `}
`;

export const Left = styled.div`
  margin-top: 50px;
  width: 500px;
  h1 {
    font-size: 50px;
    margin-left: 40px;
    color: #333;
    word-wrap: break-word;
    letter-spacing: 1.5px;
  }

  ${media.mobile`
    width:100%;
    padding-left:10px;
    margin-top:80px;
    h1 {
      font-size: 40px;
      margin-left: 0px;
      overflow-wrap: break-word;
      line-height: 1.5em;
    }
  `}
`;
