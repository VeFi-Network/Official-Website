import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/toggleSlice";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap
} from "../../styles/navigation/sidebar/Sidebar.styled";
import { NavLinks } from "../../utility/data/Navlinks";
import { Button } from "../../utility/GlobalStyle";

const Sidebar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const [connected] = useState(false);

  const handleConnect = () => {
    dispatch(openModal());
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NavLinks.map(({ label, path }, i) => (
            <SidebarLink to={path} onClick={toggle} key={i}>
              {label}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrap>
          <Button bgColor="var(--bg-blue)" fontColor="#fff" border onClick={connected ? "" : handleConnect}>
            {connected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
