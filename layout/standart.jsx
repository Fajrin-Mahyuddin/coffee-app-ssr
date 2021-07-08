/* eslint-disable react/prop-types */
import React, { createRef, useRef } from 'react';
import { ContentWrapper, Navbar, Footer } from 'components';
import { toggleAction } from 'utils/drawer-helper';

const Content = ({ className, children, ...props }) => {
  return (
    <div className="content" {...props}>
      {children}
    </div>
  )
}

const StandartLayout = ({ footer = true, children }) => {

  const navRef = useRef();
  const contentRef = useRef();

  return (
    <div className="standart">
      <Navbar menu="StandartMenu" ref={navRef} toggleAction={() => toggleAction(navRef, contentRef)} className="container" />
      <ContentWrapper ref={contentRef}>
        {children}
        {footer &&
          <Footer />
        }
      </ContentWrapper>
    </div>
  );
};

StandartLayout.Content = Content;

export default StandartLayout;
