import React from 'react';
import { ActiveLink } from 'components'
import { DashboardOutlined, LoadingOutlined, UserOutlined, LogoutOutlined, ReadOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useAppContext } from 'utils/auth';


const StandartMenu = () => {
  const { authUser } = useAppContext();
  console.log("current user", authUser)
  return (
    <ul>
      <li className="mrl-20">
        <ActiveLink href="/" className="nav-menu-item">
          <DashboardOutlined />
          Dashboard
        </ActiveLink>
      </li>
      <li className="mrl-20">
        <ActiveLink href="/articles" className="nav-menu-item">
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
      {authUser &&
        <li className="mrl-20">
          <ActiveLink href="/profile" className="nav-menu-item">
            <UserOutlined />
            {authUser.displayName ?? 'name not set'}
          </ActiveLink>
        </li>
      }

      <li className="mrl-20">
        <button className="nav-menu-item btn default-less-btn sm-less-btn less-btn">
          <ShoppingOutlined />
        </button>
      </li>
      {!authUser &&
        <li>
          <a className="nav-menu-item btn primary-btn sm-btn" href="/login">
            <LogoutOutlined />
            Login
          </a>
        </li>
      }

    </ul>
  )
}

const MenuLogin = () => {

  return (
    <ul>
      {/* <li className="mrl-20">
        <ActiveLink href="/" className="nav-menu-item">
          <DashboardOutlined />
          Dashboard
        </ActiveLink>
      </li>
      <li className="mrl-20">
        <ActiveLink href="/articles" className="nav-menu-item">
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
      <li>
        <a className="nav-menu-item btn primary-btn sm-btn" href="/login">
          <LogoutOutlined />
          Login
        </a>
      </li> */}
    </ul>
  )
}

export {
  StandartMenu,
  MenuLogin
};
