/* eslint-disable react/prop-types */
import React from 'react';
import { StandartMenu } from './menuList';

const list = {
  StandartMenu,
};

const NavMenuWrapper = (Component) => ({ menu }) => (
  <Component Menus={list[menu]} />
);

export default NavMenuWrapper;
