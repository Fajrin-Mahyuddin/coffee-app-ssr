/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { forwardRef, useEffect } from 'react';
import { ifHeaderScrolled } from 'utils/scrolled';
import { ToggleBtn } from 'components';
import NavMenu from './navmenu';

const Navbar = ({
  className,
  toggleAction,
  menu,
}, ref) => {

  useEffect(() => {
    ifHeaderScrolled(ref)
    window.addEventListener('scroll', () => ifHeaderScrolled(ref));
    return () => window.addEventListener('scroll', () => ifHeaderScrolled(ref));
  }, []);

  return (
    <header ref={ref} className={className}>
      <div className="hide-btn">
        <ToggleBtn className="nav-btn" id="nav-btn" toggleAction={toggleAction} />
      </div>
      <div className="nav-logo">
        <img src="/favicon.svg" className="logo" alt="logo" />
      </div>
      <NavMenu menu={menu} />
    </header>
  );
};

export default forwardRef(Navbar);
