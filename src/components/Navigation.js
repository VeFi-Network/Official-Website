import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkList } from "./LinkItem";
import menu from "../assets/images/menu.png";
import { StyledButton } from "./Button";
import { FaTelegramPlane } from "react-icons/fa";
import { FiFile } from "react-icons/fi";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = LinkList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active" onClick={() => setClicked(false)}>
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="menu-btn" onClick={handleClick}>
        {clicked ? <i className="fas fa-times"></i> : <img src={menu} alt="menu" />}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {menuList}
        <div style={{ marginTop: "20px" }} className="mobile">
          <li>
            <StyledButton bg="#000">
              Whitepaper <FiFile className="icon" />
            </StyledButton>
          </li>
          <li>
            <a href="https://t.me/vefi_official">
              <StyledButton>
                Join our community <FaTelegramPlane className="icon" />
              </StyledButton>
            </a>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Navigation;
