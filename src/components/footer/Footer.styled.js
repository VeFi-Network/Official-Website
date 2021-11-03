import styled from "styled-components";
import map from "../../assets/images/map.png";
import media from "../../utility/Media";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: url(${map}) no-repeat, rgba(0, 0, 0, 0.9);
  background-position: right;
  background-size: cover;
  background-blend-mode: darken;
  flex-direction: column;
  .footer {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
    padding: 20px 0px;
    color: gray;
    font-size: 14px;

    .footer__item {
      flex: 1 0 21%;
      margin: 5px;

      h2 {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 10px;
      }
      ul {
        list-style-type: none;

        h2 {
          margin: 10px 0px;
        }
        li {
          padding: 10px 0px;
          img {
            width: 100px;
            height: 50px;
            object-fit: contain;
          }
          p {
            color: inherit;
            font-size: inherit;
            line-height: 1.3em;
          }
          a {
            color: gray;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.3s ease-in-out;

            &:hover {
              color: #fff;
              text-decoration: underline;
              transition: all 0.3s ease-in-out;
            }
          }
          .social_icon {
            color: inherit;
            font-size: 20px;
            margin: 0px 8px;
          }
          .social_icon:nth-child(1) {
            margin-left: 0px;
          }
        }
      }
    }
  }

  .footer:nth-child(2) {
    border-bottom: none;
  }

  ${media.mobile`
    width:100%;
    .footer {
      display: flex;
      flex-wrap: wrap;
      border-bottom: none;

      .footer__item {
        flex: 1 150px;
        flex-direction:column;
        border-bottom: 1px solid #ccc;
      }
    }
    .footer:nth-child(1) {
      border-top: none;
    }
    .footer:nth-child(2) {
      border-bottom: none;
    }
  `}

  ${media.small`
  .footer {
    display: flex;
    flex-wrap: wrap;

    .footer__item {
      flex: 50%;
      margin: 5px;
      border:none;
      ul{
        h2{
          font-size:20px;
        }
        li{
          a{
            font-size:18px;
          }
        }
      }
    }
    .legal{
      margin-top:-40px;
    }
  }
  `}
`;
export const StyledCallToAction = styled.div`
  display: flex;
  background: ${({ bg }) => bg || "#fbf6b4"};
  padding: 20px 0px;
  color: #000;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  p {
    font-weight: 600;
    font-size: 1rem;
    color: #333;
  }

  ${media.mobile`
    margin-bottom:10px;
    text-align:center;
    p{
      font-size:20px;
      max-width:30ch;
      text-align:center;
    }
  `}
`;
