import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarBtn,
} from '../../styles/navigation/sidebar/Sidebar.styled';
import { NavLinks } from '../../utility/data/Navlinks';
import { Button } from '../../utility/GlobalStyle';

const Sidebar = ({ isOpen, toggle }) => {
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
          <SidebarBtn to="/connect">
            <Button bgColor="var(--bg-blue)" fontColor="#fff" border>
              Connect wallet
            </Button>
          </SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
