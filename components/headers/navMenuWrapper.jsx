/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { basketList } from 'state/atoms/cart';
import { getFirebaseAuth } from 'utils/auth';
import { reqCart } from 'utils/cart-helper';
import { StandartMenu, MenuLogin } from './menuList';

const list = {
  StandartMenu,
  MenuLogin
};


const NavMenuWrapper = (Component) => ({ menu }) => {
  const [cartCount, setCartCount] = useRecoilState(basketList);
  const { authUser, loading } = getFirebaseAuth();

  useEffect(async () => {
    const data = await reqCart();
    setCartCount(data.length);
  }, []);

  if (loading) return <></>;
  return <Component
    Menus={list[menu]}
    cartCount={cartCount}
    authUser={authUser}
  />
};

export default NavMenuWrapper;
