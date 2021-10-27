import styled from "styled-components";
import map from "../../assets/images/double_coin.svg";
import media from "../../utility/Media";
export const StyledSmartChain = styled.section`
  width: 100%;
  background: url(${map}) no-repeat, #fbf6b4;
  display: flex;
  color: #000;
  background-position: right;
  background-size: contain;
  background-blend-mode: screen;

  ${media.mobile`
    width:100%;
    flex:1;
    padding-bottom:350px;
    margin-top:-170px;
    background:whitesmoke;
`}
`;

export const SmartChainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 100px 0px;

  ${media.mobile`
    width:100%;
    flex:1;
    margin:80px 0px -200px 0px;;
`}
`;
