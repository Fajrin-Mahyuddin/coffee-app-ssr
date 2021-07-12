import React from 'react';
import Link from 'next/link';
import { ActiveLink } from 'components'
import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, ReadOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { getUser } from 'utils/firebase-auth';
import { useQuery } from 'react-query';

const StandartMenu = () => {
  let data = false
  // const { data } = useQuery("getCurrentUser", getUser)
  // console.log("data dari usequery", data?.user)
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

      {data ?
        <>
          <li className="mrl-20">
            <ActiveLink href="/profile" className="nav-menu-item">
              <UserOutlined />
              {data?.user?.email}
            </ActiveLink>
          </li>
          <li className="mrl-20">
            <button className="nav-menu-item btn default-less-btn sm-less-btn less-btn">
              <ShoppingOutlined />
            </button>
          </li>
        </>
        :
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
      <li>
        <a className="nav-menu-item btn primary-btn sm-btn" href="/login">
          <LogoutOutlined />
          Login
        </a>
      </li>
    </ul>
  )
}

export {
  StandartMenu,
  MenuLogin
};
