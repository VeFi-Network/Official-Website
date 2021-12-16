import styled from "styled-components";
import bg from "../../assets/images/user.png";
import media from "../../utility/Media";
export const StyledContactUs = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 60px;
  display: flex;
  margin-bottom: 40px;

  ${media.mobile`
        height:100%;
        background-position:right center;
        background-size: cover;
       
    `}
`;

export const ContactUsContainer = styled.div`
  width: 600px;
  margin: 80px 0px;
  color: #fff;

  h1 {
    font-size: 50px;
  }

  button {
    width: 100%;
    background: #fbf6b4;
    padding: 5px;
    text-transform: capitalize;
    font-weight: 600;

    &:hover {
      background: #fbf6b4;
    }
  }

  ${media.mobile`
    width:100%;
  `}
  ${media.small`
    h1{
        font-size:40px;
    }
  `}
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 8px;
  border-radius: 5px;
  margin: 10px 0px;
  color: #ccc;
  font-size: 18px;
  input,
  textarea {
    width: 100%;
    border: none;
    outline: none;
    border-width: 0px;
    color: #ccc;
    letter-spacing: 0.05em;
    margin-left: 5px;
  }

  ${media.mobile`
  font-size: 24px;
    input,
    textarea {
       padding:10px 0px;
       font-size:18px;
    }
  `}
`;
