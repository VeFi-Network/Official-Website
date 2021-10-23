import styled from "styled-components";
import map from "../../assets/images/map.png";
import media from "../../utility/Media";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px 30px;
  background: url(${map}) no-repeat, rgba(0, 0, 0, 0.9);
  background-position: right;
  background-size: cover;
  background-blend-mode: darken;

  ${media.mobile`
    width:100%;
    padding:30px 10px;

    .mobile{
      display:none;
    }
  `}
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  margin: 20px 30px;
  width: 97%;
  justify-content: center;

  ${media.tablet`
   
  `}
  ${media.mobile`
    width:100%;
    margin:0px;
    display:flex;
    flex-wrap:wrap;
  `};
`;

export const StyledFooterNav = styled.div`
  ${media.mobile`
  flex:1;
  display: flex;
  flex-direction: column;
  border-bottom:1px solid #ccc;
  margin-bottom:10px;
`};

  width: 100%;
  margin: 0px 10px;
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    margin: 10px 0px;
    margin-left: 5px;
  }
  p {
    font-size: 16px;
    color: whitesmoke;
    font-weight: 400;
    line-heigh: 1.3em;
  }
  img {
    margin-bottom: 10px;
  }
`;

export const SocialIcons = styled.div`
  dispaly: flex;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-left: -10px;

  span {
    margin: 8px 14px;
  }
`;
