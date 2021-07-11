/* eslint-disable react/prop-types */
import React from 'react';
import { StandartMenu, MenuLogin } from './menuList';

const list = {
  StandartMenu,
  MenuLogin
};

const NavMenuWrapper = (Component) => ({ menu }) => (
  <Component Menus={list[menu]} />
);

export default NavMenuWrapper;
