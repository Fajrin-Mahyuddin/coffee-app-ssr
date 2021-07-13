/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import NavMenuWrapper from './navMenuWrapper';

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded;
}

const NavMenu = ({ Menus }) => {
  const { loaded } = useLoaded()
  return (
    <nav className="nav-menu">
      <Menus />
    </nav>
  );
};

export default NavMenuWrapper(NavMenu);
