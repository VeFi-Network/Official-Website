import styled from 'styled-components';
import { LinkRouter, LinkScroll } from '../../../utility';

export const Nav = styled.nav`
  height: 80px;
  background: #fff;
  display: flex;
  position: sticky;
  color: white !important;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  align-items: center;
`;

export const NavLogo = styled(LinkRouter)`
  color: var(--text-color);
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;

    .icon {
      font-size: 1.8rem;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: var(--heading-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.8s all ease;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: var(--bg-blue);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  text-decoration: none;
`;
