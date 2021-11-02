import styled from "styled-components";
import media from "../../utility/Media";
export const HeaderTop = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 999;

  ${media.mobile`
    height:80px;
`}
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;

  img {
    height: 80px;
    width: 80px;
    object-fit: contain;
  }

  ${media.mobile`
  flex: 0.5;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  `}

  ${media.small`
  flex: 0.5;
  img {
    height:  100%;
    width: 100%;
    object-fit: contain;
  }
`}
`;

export const HeaderCenter = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #0062af;
    font-weight: 600;
    margin: 0px 10px;
    font-size: 16px;
    text-transform: capitalize;
  }

  ${media.mobile`
    display:none;
  `}
`;

export const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  .mobile {
    display: none;
  }
  .menu-list {
    display: flex;
    flex: 1;
    li {
      list-style: none;

      a {
        font-size: 18px;
        margin: 0px 15px;
        color: #161525;
        text-decoration: none;
        &.active {
          color: #0062af;
        }
      }
    }
  }
  .menu-btn {
    display: none;
  }
  a {
    text-decoration: none;
  }
  button {
    display: flex;
  }
  ${media.mobile`
    flex: 1;
    margin-left: 40px;
    margin-right: 20px;
    flex-direction: row-reverse;
    
    .mobile{
      display:flex;
      flex-direction:column;
    }
    .desktopNav{
      display:none;
    }
    .menu-btn {
      margin-left: 30px;
      display:flex;
      align-items:center;
      cursor:pointer;

      .fas{
        font-size:30px;
      }
      .fa-times{
        transform:rotate(360deg);
        transition:all 0.2s ease-in-out;
      }
      .fa-bars{
        transform:rotate(180deg);
        transition:all 0.2s ease-in-out;
      }
      img{
        height:30px;
        width:30px;
        object-fit:contain;
      }
    }

    .menu-list {
      width:100%;
      background-color:whitesmoke;
      flex-direction:column;
      position:absolute;
      padding: 20px;
      right:0;
      top:80px;
      transition: all 0.5s ease-in-out;

      li{
        margin-bottom:20px;
        width:100%;
        text-align:left;

        a{
          color:#000;
          font-size:24px;
          &.active{
            color:#0062AF;
          }
        }
        
        button{
          margin-left:10px;
          font-size:18px;
          font-weight:600;
          padding:10px 20px;
        }
      }

      li:nth-child(1){
        margin-top:20px;
      }
    }
    .close{
      transition: all 0.5s ease-in-out;
      right:-100%;
    }
`}
  ${media.small`
    button{
      padding:8px 10px;
    }
`}
`;
