import React from 'react';
import Link from 'next/link';
import { ActiveLink } from 'components'
import { InfoCircleOutlined, LogoutOutlined, ReadOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const StandartMenu = () => (
  <ul>
    <li className="mrl-20">
      <ActiveLink href="/" className="nav-menu-item">
        <ReadOutlined />
        Articles
      </ActiveLink>
    </li>
    <li className="mrl-20">
      <ActiveLink href="/sale" className="nav-menu-item">
        <ShoppingCartOutlined />
        Sale
      </ActiveLink>
    </li>
    <li className="mrl-20">
      <ActiveLink href="about" className="nav-menu-item">
        <InfoCircleOutlined />
        About us
      </ActiveLink>
    </li>
    <li>
      <a className="nav-menu-item btn primary-btn sm-btn" href="/login">
        <LogoutOutlined />
        Login
      </a>
    </li>
  </ul>
);

export {
  StandartMenu,
};
