import styled from "styled-components";
import banner from "../../assets/images/banner.svg";
import circle from "../../assets/images/circle.svg";
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
`;

export const Left = styled.div`
  margin-top: 50px;

  h1 {
    font-size: 50px;
    margin-left: 40px;
    color: #333;
    letter-spacing: 1.5px;
  }

  span {
    background: url(${circle});
    background-size: contain;
    padding: 20px 10px;
    background-position: left;
  }
`;
