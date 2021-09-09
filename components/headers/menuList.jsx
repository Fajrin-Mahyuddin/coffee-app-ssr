import React, { useEffect } from 'react';
import { ActiveLink } from 'components'
import { DashboardOutlined, UserOutlined, LogoutOutlined, ReadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppContext } from 'utils/auth';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useResetRecoilState } from 'recoil';
import { basketList, getDataCart, getDataCartCount } from 'state/atoms/cart';
import { reqCart } from 'utils/cart-helper';


const StandartMenu = () => {
  const { authUser } = useAppContext();
  const [cartCount, setCartCount] = useRecoilState(basketList);
  const cart = useRecoilValueLoadable(getDataCart);

  useEffect(async () => {
    const data = await reqCart();
    setCartCount(data.length)
  }, []);
  console.log("cartcount", cartCount);

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
          <ShoppingCartOutlined />
          {!!cartCount && <i className="badge-nav badge badge-danger">{cartCount}</i>}
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
