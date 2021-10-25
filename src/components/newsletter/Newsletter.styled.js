import styled from "styled-components";
import rectangle from "../../assets/images/rectangle.svg";
import media from "../../utility/Media";
export const StyledNewsletter = styled.section`
  width: 100%;
  display: flex;
  height: 400px;
  padding-top: 50px;
  overlow: hidden;
  ${media.mobile`
    padding-top:0px;
    height:auto;
    background:whitesmoke;
  `}
`;

export const NewsletterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;

  ${media.mobile`
    flex-direction:column-reverse;
    margin-top:0px;
    height: auto;
    
  `}
`;

export const NewsletterDiv = styled.div`
  background: #fbf6b4;
  width: 90%;
  display: flex;
  flex: 0.5;
  color: #000;
  margin-left: 40px;
  border-radius: 40px;
  padding: 50px 30px;
  flex-direction: column;
  overflow: hidden;

  ${media.mobile`
    width:110%;
    margin:0px 0px 0px -15px;
    border-radius: 0px;
    padding: 0px 10px;
    overflow-x:hidden;
    padding-bottom:50px;
    z-index:2;
`}
`;
export const NewsletterGetStarted = styled.div`
  h1 {
    font-size: 34px;
    letter-spacing: 1.5px;
    font-weigh: 500;
    margin-bottom: 20px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
  }
  .mobile {
    display: none;
  }

  ${media.mobile`
  h1{
    margin-top:10px;
    font-size:28px;
    margin:20px 0px;
  }
  p{
    font-size:24px;
    font-weight:400;
  }
  .desktop{
    display:none;
  }
  .mobile {
    display: block;

  }
`}
`;
export const NewsletterFormContainer = styled.div`
  margin-top: 20px;
`;
export const NewletterForm = styled.div`
  background: white;
  width: 500px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #000 #ccc;
  display: flex;
  input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    color: #333;
    padding: 8px;
    font-weight: 600;
    margin-right: 10px;
  }
  button {
    width: 100%;
    flex: 0.2;
    color: #fff;
    text-transform: lowercase;
    height: fit-content;
    padding: 10px 20px;
  }

  ${media.mobile`
  width:100%;
  justify-content:space-between;
  input{
    width:100%;
    font-size:20px;
  }
  button{
    font-weight:600;
    font-size:18px;
    padding:12px 20px;
  }
`}
`;

export const NewsletterImage = styled.div`
  flex: 0.3;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 200px;
  margin-top: -120px;
  margin-left: 50px;

  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
  }

  ${media.mobile`
  margin-top:0px;
  position:relative;
  width:100%;
  margin-bottom: -130px;
  margin-left: 0px;

  img{
    object-fit:cover;
    padding:0px;
    margin-left:25px;
  }
`}
`;
