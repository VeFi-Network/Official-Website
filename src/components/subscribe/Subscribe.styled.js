import styled from "styled-components";
import media from "../../utility/Media";
export const StyledSubscribe = styled.section`
  display: flex;
  width: 100%;

  ${media.mobile`
    background: #fefcea;
  `}
`;

export const SubscribeContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0px;
  align-items: center;
  position: relative;

  ${media.mobile`
  flex-direction: column;
  text-align: center;

  p {
    line-height: 1.3em;
    font-size: 20px;
  }
  .hideOnMobile {
    display: none;
  }
  .inputFormContainer {
    width: 100%;
    display: flex;
    background: white;
    margin-top: 20px;
    padding: 5px 5px;
    border: 2px solid #ddd;

    button {
      margin-right: 5px;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 16px;
    }
    input {
      font-size: 20px;
    }
  }
  `}
`;
