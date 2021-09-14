import { ActiveLink } from 'components'
import React, { useEffect, useState } from 'react';
import { getFirebaseAuth, useAppContext } from 'utils/auth';
import { reqCart } from 'utils/cart-helper';
import { basketList, getDataCart } from 'state/atoms/cart';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  ReadOutlined,
  UserOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { checkFirebase } from 'utils/firebase-auth';


const StandartMenu = () => {
  const { authUser, loading } = getFirebaseAuth();
  const [cartCount, setCartCount] = useRecoilState(basketList);

  useEffect(async () => {
    const data = await reqCart();
    setCartCount(data.length);
  }, []);

  if (loading) {
    return <></>
  }

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
        <a href="/cart" className="nav-menu-item btn default-less-btn sm-less-btn less-btn">
          <ShoppingCartOutlined />
          {authUser && !!cartCount && <i className="badge-nav badge badge-danger">{cartCount}</i>}
        </a>
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
