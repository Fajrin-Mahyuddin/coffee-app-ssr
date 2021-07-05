import React from 'react';
import { InfoCircleOutlined, LoginOutlined, LogoutOutlined, ReadOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const StandartMenu = () => (
  <ul>
    <li className="mrl-20">
      <a href="/articles"
        className="nav-menu-item"
      >
        <ReadOutlined />
        Articles
      </a>
    </li>
    <li className="mrl-20">
      <a href="/sale" className="nav-menu-item">
        <ShoppingCartOutlined />
        Sale
      </a>
    </li>
    <li className="mrl-20">
      <a href="# " className="nav-menu-item">
        <InfoCircleOutlined />
        About us
      </a>
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
