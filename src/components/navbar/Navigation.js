import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkList } from "./LinkItem";
const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = LinkList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
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
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </>
  );
};

export default Navigation;
