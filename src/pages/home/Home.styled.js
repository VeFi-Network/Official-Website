import styled from "styled-components";
import arrow_right from "../../assets/images/arrow_right.svg";
import arrow_left from "../../assets/images/arrow_left.svg";
import media from "../../utility/Media";
import { StyledHowItWorks } from "../../components/exchange/HowItWorks.styled";

export const SectionSmartChainWrapper = styled(StyledHowItWorks)`
  background-position: right;
  background-blend-mode: screen;
  background-size: contain;
  color: #161525;
  padding: 50px 30px;
  overflow: none;
  ${media.mobile`
    padding:0px 30px;
    margin-top:-40px;
  `}
  ${media.small`
    padding:0px 30px;
    margin-top:-40px;
  `}
`;

export const SectionSmartChainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .Heading {
    margin-bottom: 10px;

    h2 {
      font-weight: 600;
      font-size: 1.8rem;
    }
  }
  ${media.mobile`
    h2{
        font-size:1rem !important;
        max-width:20ch;
    }
  `}
  ${media.small`
    h2{
        font-size:1rem !important;
        max-width:25ch;
    }
  `}
`;

export const SectionSmartChain = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;

  .left {
    flex: 0.6;

    p {
      font-size: 18px;
      font-weight: normal;
      max-width: 50.1ch;
      color: #333;
    }
    button {
      margin: 15px 0px;
    }
    h2 {
      margin-top: -30px;
      margin-bottom: 20px;
      font-weight: 600;
    }
  }
  .right {
    flex: 0.3;
    background: url(${arrow_right}) no-repeat;
    background-position: left;
    background-size: contain;
    margin-top: 30px;
  }
  .center {
    background: url(${arrow_left}) no-repeat;
    background-position: right;
    background-size: contain;
    margin-top: 30px;
    margin-right: 10px;
  }

  ${media.mobile`
    flex-direction:column;
    .left{
        h2 {
            margin-top: 0px;
            font-size:1rem;
        }
        p{
            max-width:30ch;
            line-height:1.3em;
          font-size:0.6rem;  
        }
    }
    .right{
        background:green;
        margin:0px;
        height:100px;
    }
  `}
  ${media.small`
  
    .left{
        flex:0.5;

        h2 {
        margin-top: 0px;
        font-size:1rem;
        }
        p{
          line-height:1.3em;
          font-size:0.6rem;
          max-width:40ch;  
        }
    }
    .right{
        background:green;
        flex:0.5;
        margin:0px;
    }
  `}
`;

export const SectionNewsletter = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  margin-top: 200px;
  ${media.mobile`
    height:auto;
    margin-top:10px;
    margin-bottom:30px;
  `}
  ${media.small`
  height:auto;
  margin-top:10px;
  margin-bottom:30px;
  `}
`;

export const SectionNewsletterContainer = styled.div`
  background: #fffcc3;
  width: 100%;
  height: 300px;
  align-items: center;
  display: flex;
  padding: 0px 30px;
  border-radius: 20px;
  position: relative;

  ${media.mobile`
    width:100%;
    height:auto;
    padding-bottom:30px;
    position:relative;
    flex-direction:column;
    border-radius: 5px;
  `}

  ${media.small`
    width:100%;
    height:auto;
    padding-bottom:30px;
    border-radius: 5px;
  `}
`;

export const NewsletterForm = styled.div`
  flex: 0.7;
  h2 {
    margin-bottom: 20px;
  }
  p {
    max-width: 50ch;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #333;
  }

  ${media.mobile`
    flex:1;
    width:100%;
    margin-top:40px;
    h2{
      font-size:24px;
    }
    p{
      font-size:14px;
      color:#333;
    }
 `}
  ${media.small`
    h2{
      font-size:24px;
    }
 `}
`;

export const NewsletterInputForm = styled.div`
  width: 400px;
  display: flex;
  background: #fff;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #eee;

  input {
    width: 80%;
    border: none;
    outline: none;
    border-width: 0px;
  }
  button {
    font-size: 10px;
    padding: 10px;
  }

  ${media.mobile`
    width:100%;

    input{
      width:75%;
    }
  `}

  ${media.small`
    width:100%;
    input{
      width:70%;
    }
  `}
`;

export const NewsletterImageContainer = styled.div`
  img {
    position: absolute;
    bottom: 0;
    width: 400px;
    height: 400px;
    object-fit: contain;
    right: -60px;
  }

  ${media.mobile`
display:none;
      img{
        bottom:150px;
        object-fit:contain;
        right:0;
      }
    `}
`;
