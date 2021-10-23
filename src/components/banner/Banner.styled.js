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
  background-size: cover;
  display: flex;
  position: relative;

  ${media.mobile`
  height: 100vh;
  background-position: right; /* Center the image */
  background-size: cover;
  `}
  ${media.tablet`
    height: 60vh;
    background-position: left; /* Center the image */
    background-size: contain;
  `}
`;

export const Left = styled.div`
  margin-top: 50px;

  h1 {
    font-size: 50px;
    margin-left: 40px;
    color: #333;
    letter-spacing: 1.5px;
  }

  ${media.mobile`
    width:100%;
    padding-left:10px;
    h1 {
      font-size: 50px;
      margin-left: 0px;
      overflow-wrap: break-word;
      line-height: 1.5em;
    }
  `}
  ${media.tablet`
  padding-left:20px;
  `}
`;
